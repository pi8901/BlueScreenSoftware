package com.example.demo.service;

import weka.core.Instances;
import weka.core.converters.ArffLoader;
import weka.core.converters.ArffSaver;
import weka.core.converters.CSVLoader;
import weka.core.converters.ConverterUtils.DataSource;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.AddExpression;
import weka.filters.unsupervised.attribute.NumericCleaner;
import weka.filters.unsupervised.attribute.NumericToNominal;
import weka.filters.unsupervised.attribute.Remove;
import weka.attributeSelection.InfoGainAttributeEval;
import weka.classifiers.rules.ZeroR;
import weka.classifiers.trees.J48;
import weka.clusterers.SimpleKMeans;
import weka.core.Instances;
import weka.core.converters.CSVLoader;
import weka.filters.unsupervised.attribute.AddExpression;
import weka.filters.unsupervised.attribute.NumericToNominal;
import weka.filters.Filter;
import java.io.File;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


public class turnoverService 
{
    
    
    public turnoverService() 
    {
        
    }

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
        
        int[] attributeIndicesToKeep = {5, 9}; // Beispiel: 5 und 9 sind die Indizes der Attribute, die behalten werden sollen
        
        // Filtern Sie die Daten, um nur die ausgewählten Attribute zu behalten
        Remove removeFilter = new Remove();
        removeFilter.setAttributeIndicesArray(attributeIndicesToKeep);
        removeFilter.setInvertSelection(true); // Alle Attribute außer den ausgewählten behalten
        removeFilter.setInputFormat(alleDaten);
        Instances tag = Filter.useFilter(alleDaten, removeFilter);
        System.out.println(findCluster(tag, 6));

    }

    static String findCluster(Instances daten, int number) throws Exception {
        String[] result;

        SimpleKMeans model = new SimpleKMeans();
        model.setNumClusters(number);
        model.buildClusterer(daten);
        // Final cluster centroids holen
        result = model.getClusterCentroids().toString().split("@data\n");
        return (result[1] + "\n");
    }

    
}
