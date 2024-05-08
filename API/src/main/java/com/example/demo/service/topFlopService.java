package com.example.demo.service;

import java.io.File;
import java.util.Arrays;

import weka.attributeSelection.AttributeSelection;
import weka.attributeSelection.BestFirst;
import weka.attributeSelection.CfsSubsetEval;
import weka.attributeSelection.InfoGainAttributeEval;
import weka.clusterers.SimpleKMeans;
import weka.core.Instances;
import weka.core.converters.CSVLoader;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.NumericCleaner;
import weka.filters.unsupervised.attribute.Remove;

public class topFlopService 
{
        public static void main(String[] args) throws Exception{
        String path = "API//src//main//resources//static//";
        String roh = path + "kd100.csv";

        Instances alleDaten;

        //5,9


        // CSV-Datei laden
        CSVLoader loader = new CSVLoader();
        loader.setSource(new File(roh));
        alleDaten = loader.getDataSet();

        // 0 durch ? ersetzen, um fuer die Auswertung nur die Waren zu
        // beruecksichtigen, die gekauft wurden
        NumericCleaner nc = new NumericCleaner();
        nc.setMinThreshold(1.0); // Schwellwert auf 1 setzen
        nc.setMinDefault(Double.NaN); // alles unter 1 durch ? ersetzen
        nc.setInputFormat(alleDaten);
        alleDaten = Filter.useFilter(alleDaten, nc); // Filter anwenden
        

        System.out.println(findTopFlop(alleDaten, 2));

    }

    static String findTopFlop(Instances daten, int number) throws Exception {
        String[] result;

        AttributeSelection attsel = new AttributeSelection();
        CfsSubsetEval eval = new CfsSubsetEval();
        daten.setClassIndex(daten.numAttributes() - 1);
        //eval.buildEvaluator(daten);
        BestFirst search = new BestFirst();
        attsel.setEvaluator(eval);
        attsel.setSearch(search);
        attsel.SelectAttributes(daten);
        int[] indices = attsel.selectedAttributes();
        for (int i = 0; i < indices.length; i++) {
            System.out.println(daten.attribute(indices[i]).name());
        }
        System.out.println(attsel.CVResultsString());


        return "test";
    }
}
