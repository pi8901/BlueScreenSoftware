package com.example.demo.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.api.model.apriori;

import weka.associations.Apriori;
import weka.associations.AssociationRule;
import weka.core.Instances;
import weka.core.converters.CSVLoader;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.NumericCleaner;
import weka.filters.unsupervised.attribute.NumericToNominal;

@Service
public class aprioriService 
{

    static getFilePath path;

    public aprioriService()
    {
        path = new getFilePath();
    }

    private String clearAprioriList(String oneRule) {
        String temp = "";

        // Weka-blabla raus loeschen
        for (int i = 0; i < oneRule.length(); i++) {
            Character a = oneRule.charAt(i);
            if ((Character.isLetter(a)) || (a == ',')) {
                temp = temp + a;
            }
        }
        return temp;
    }

    public apriori[] getApriori() throws Exception
    {
        CSVLoader loader = new CSVLoader();

                loader.setSource(new File(path.getPath()));
            
            Instances data = loader.getDataSet();

            NumericCleaner nc = new NumericCleaner();
        nc.setMinThreshold(1.0); // Schwellwert auf 1 setzen
        nc.setMinDefault(Double.NaN); // alles unter 1 durch ? ersetzen
        nc.setMaxThreshold(1.0); // Schwellwert auf 1 setzen
        nc.setMaxDefault(1.0);
        nc.setInputFormat(data);
        data = Filter.useFilter(data, nc); // Filter anwenden


            for (int i = 0; i < 10; i++) 
            {
                data.deleteAttributeAt(0);
            }

            // Die Daten als nominale und nicht als numerische Daten setzen
            NumericToNominal num2nom = new NumericToNominal();
            num2nom.setAttributeIndices("first-last");
            num2nom.setInputFormat(data);
            data = Filter.useFilter(data, num2nom);
    
            Apriori model = new Apriori();
            model.buildAssociations(data);
    
            List<AssociationRule> rulesA = model.getAssociationRules().getRules();
            int anzRules = rulesA.size();
    
            apriori[] aprioriResults = new apriori[anzRules];
            for (int i = 0; i < anzRules; i++) 
            {
                aprioriResults[i] = new apriori(clearAprioriList(rulesA.get(i).getPremise().toString()).split(","), clearAprioriList(rulesA.get(i).getConsequence().toString()));
            }

            return aprioriResults;
    }
}
