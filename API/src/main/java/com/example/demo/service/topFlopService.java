package com.example.demo.service;

import java.io.File;

import org.springframework.stereotype.Service;

import com.example.demo.api.model.attributeRank;

import weka.attributeSelection.AttributeSelection;
import weka.attributeSelection.CorrelationAttributeEval;
import weka.attributeSelection.Ranker;
import weka.core.Instances;
import weka.core.converters.CSVLoader;

/**
 * Service class for computing top-flop attributes.
 */
@Service
public class topFlopService {

    /** Service for getting file paths. */
    getFilePath path;

    /**
     * Constructs a new topFlopService instance and initializes the file path.
     */
    public topFlopService() {
        path = new getFilePath();
    }

    /**
     * Computes the top-flop attributes from the data.
     *
     * @return an array of attribute ranks
     */
    public attributeRank[] getTopFlop() {
        try {
            CSVLoader loader = new CSVLoader();
            loader.setSource(new File(path.getPath()));
            Instances data = loader.getDataSet();
            for (int i = 0; i < 9; i++) {
                data.deleteAttributeAt(0);
            }
            data.setClassIndex(0);
            CorrelationAttributeEval evaluator = new CorrelationAttributeEval();
            Ranker search = new Ranker();
            AttributeSelection selector = new AttributeSelection();
            selector.setEvaluator(evaluator);
            selector.setSearch(search);
            selector.SelectAttributes(data);
            int[] selectedAttributes = selector.selectedAttributes();
            attributeRank[] attributeRanks = new attributeRank[selectedAttributes.length - 1];
            double[][] output = selector.rankedAttributes();
            for (int i = 0; i < output.length; i++) {
                attributeRanks[i] = new attributeRank(data.attribute((int) output[i][0]).name(), i + 1,
                        output[i][1]);
            }
            return attributeRanks;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
