package com.example.demo.service;

import weka.core.Instances;
import weka.core.converters.CSVLoader;
import weka.attributeSelection.CorrelationAttributeEval;
import weka.attributeSelection.Ranker;
import java.io.File;

import org.springframework.stereotype.Service;
import com.example.demo.api.model.attributeRank;
import weka.attributeSelection.AttributeSelection;

@Service
public class topFlopService 
{

    getFilePath path;

    public topFlopService() 
    {
        path = new getFilePath();
    }

     public attributeRank[] getTopFlop()
     {
        try 
        {
            CSVLoader loader = new CSVLoader();
            loader.setSource(new File(path.getPath()));
            Instances data = loader.getDataSet();
            for (int i = 0; i < 9; i++) 
            {
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
            for (int i = 0; i < output.length; i++) 
            {
                attributeRanks[i] = new attributeRank(data.attribute((int) output[i][0]).name(), i + 1, output[i][1]);
            }
            return attributeRanks;

        } catch (Exception e) 
        {
            e.printStackTrace();
            return null;
        }
     }
}

