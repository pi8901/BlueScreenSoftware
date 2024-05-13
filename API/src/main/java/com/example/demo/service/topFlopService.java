package com.example.demo.service;

import weka.core.Instances;
import weka.core.converters.CSVLoader;
import weka.attributeSelection.CorrelationAttributeEval;
import weka.attributeSelection.Ranker;

import java.io.File;

import com.example.demo.api.model.attributeRank;

import weka.attributeSelection.AttributeSelection;

public class topFlopService {

    public static void main(String[] args) throws Exception {
        // Load dataset
        String path = "API//src//main//resources//static//";
        String roh = path + "kd100.csv";

        Instances alleDaten;
        Instances data;
        CSVLoader loader = new CSVLoader();
        loader.setSource(new File(roh));
        alleDaten = loader.getDataSet();
        data = new Instances(alleDaten);
        for (int i = 0; i < 9; i++) {
            data.deleteAttributeAt(0); // ein einzelnes Attribut rausnehmen
        }


        data.setClassIndex(0);


        CorrelationAttributeEval evaluator = new CorrelationAttributeEval();

        // Create search method (BestFirst)
        Ranker search = new Ranker();

        // Set up attribute selection
        AttributeSelection selector = new AttributeSelection();
        selector.setEvaluator(evaluator);
        selector.setSearch(search);
        selector.SelectAttributes(data);

        // Get the selected attributes
        int[] selectedAttributes = selector.selectedAttributes();
        attributeRank[] attributeRanks = new attributeRank[selectedAttributes.length - 1];
        double[][] output = selector.rankedAttributes();
        for (int i = 0; i < output.length; i++) 
        {
            //System.out.println("Attribute " + data.attribute((int) output[i][0]).name() + ": " + output[i][0] + " " + output[i][1]);
            attributeRanks[i] = new attributeRank(data.attribute((int) output[i][0]).name(), i + 1, output[i][1]);
        }

        for (int i = 0; i < attributeRanks.length; i++) 
        {
            System.out.println(attributeRanks[i].getAttribute() + " " + attributeRanks[i].getRank() + " " + attributeRanks[i].getValue());
        }
    }
}

