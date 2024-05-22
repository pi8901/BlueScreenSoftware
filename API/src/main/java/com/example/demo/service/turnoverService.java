package com.example.demo.service;

import weka.core.Instances;
import weka.core.converters.CSVLoader;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.NumericCleaner;
import weka.filters.unsupervised.attribute.Remove;
import weka.clusterers.ClusterEvaluation;
import weka.clusterers.SimpleKMeans;
import java.io.File;

import org.springframework.stereotype.Service;

@Service
public class turnoverService {
    Instances data;
    getFilePath path;

    public turnoverService() {
        path = new getFilePath();
    }

    public String getTurnover(int[] values) throws Exception {
        CSVLoader loader = new CSVLoader();
        loader.setSource(new File(path.getPath()));
        data = loader.getDataSet();

        NumericCleaner nc = new NumericCleaner();
        nc.setMinThreshold(1.0); // Schwellwert auf 1 setzen
        nc.setMinDefault(Double.NaN); // alles unter 1 durch ? ersetzen
        nc.setInputFormat(data);
        data = Filter.useFilter(data, nc); // Filter anwenden

        int[] attributeIndicesToKeep = values; // Beispiel: 5 und 9 sind die Indizes der Attribute, die behalten
                                                 // werden sollen

        // Filtern Sie die Daten, um nur die ausgewählten Attribute zu behalten
        Remove removeFilter = new Remove();
        removeFilter.setAttributeIndicesArray(attributeIndicesToKeep);
        removeFilter.setInvertSelection(true); // Alle Attribute außer den ausgewählten behalten
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
