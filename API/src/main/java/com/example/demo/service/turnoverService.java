package com.example.demo.service;

import java.io.File;

import org.springframework.stereotype.Service;

import weka.core.Instances;
import weka.core.converters.CSVLoader;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.NumericCleaner;
import weka.filters.unsupervised.attribute.Remove;
import weka.clusterers.ClusterEvaluation;
import weka.clusterers.SimpleKMeans;

/**
 * Service class for computing turnover.
 */
@Service
public class turnoverService {

    /** The dataset. */
    Instances data;

    /** Service for getting file paths. */
    getFilePath path;

    /**
     * Constructs a new turnoverService instance and initializes the file path.
     */
    public turnoverService() {
        path = new getFilePath();
    }

    /**
     * Computes the turnover based on specified attribute values.
     *
     * @param values the indices of the attributes to consider
     * @return the turnover result
     * @throws Exception if an error occurs during the computation
     */
    public String getTurnover(int[] values) throws Exception {
        CSVLoader loader = new CSVLoader();
        loader.setSource(new File(path.getPath()));
        data = loader.getDataSet();

        NumericCleaner nc = new NumericCleaner();
        nc.setMinThreshold(1.0);
        nc.setMinDefault(Double.NaN);
        nc.setInputFormat(data);
        data = Filter.useFilter(data, nc);

        int[] attributeIndicesToKeep = values;

        Remove removeFilter = new Remove();
        removeFilter.setAttributeIndicesArray(attributeIndicesToKeep);
        removeFilter.setInvertSelection(true);
        removeFilter.setInputFormat(data);
        Instances tag = Filter.useFilter(data, removeFilter);

        SimpleKMeans model = new SimpleKMeans();
        model.buildClusterer(tag);
        ClusterEvaluation eval = new ClusterEvaluation();
        eval.setClusterer(model);
        eval.evaluateClusterer(tag);
        String[] result = model.getClusterCentroids().toString().split("@data\n");
        return (result[1] + "\n");
    }
}
