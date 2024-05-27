package com.example.demo.service;

import java.io.File;
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

/**
 * Service class for performing Apriori association analysis.
 */
@Service
public class aprioriService {

    /**
     * Gets the file path for the Apriori analysis.
     */
    static getFilePath path;

    /**
     * Constructs a new aprioriService instance and initializes the file path.
     */
    public aprioriService() {
        path = new getFilePath();
    }

    /**
     * Clears unnecessary characters from the Apriori rule.
     *
     * @param oneRule the Apriori rule to be cleaned
     * @return the cleaned Apriori rule
     */
    private String clearAprioriList(String oneRule) {
        String temp = "";

        // Remove unnecessary characters
        for (int i = 0; i < oneRule.length(); i++) {
            char a = oneRule.charAt(i);
            if (Character.isLetter(a) || a == ',') {
                temp += a;
            }
        }
        return temp;
    }

    /**
     * Performs Apriori analysis and returns the results as an array of apriori objects.
     *
     * @return an array of apriori objects representing the association rules
     * @throws Exception if an error occurs during Apriori analysis
     */
    public apriori[] getApriori() throws Exception {
        CSVLoader loader = new CSVLoader();

        loader.setSource(new File(path.getPath()));

        Instances data = loader.getDataSet();

        NumericCleaner nc = new NumericCleaner();
        nc.setMinThreshold(1.0);
        nc.setMinDefault(Double.NaN);
        nc.setMaxThreshold(1.0);
        nc.setMaxDefault(1.0);
        nc.setInputFormat(data);
        data = Filter.useFilter(data, nc);

        for (int i = 0; i < 10; i++) {
            data.deleteAttributeAt(0);
        }

        NumericToNominal num2nom = new NumericToNominal();
        num2nom.setAttributeIndices("first-last");
        num2nom.setInputFormat(data);
        data = Filter.useFilter(data, num2nom);

        Apriori model = new Apriori();
        model.buildAssociations(data);

        List<AssociationRule> rulesA = model.getAssociationRules().getRules();
        int anzRules = rulesA.size();

        apriori[] aprioriResults = new apriori[anzRules];
        for (int i = 0; i < anzRules; i++) {
            aprioriResults[i] = new apriori(clearAprioriList(rulesA.get(i).getPremise().toString()).split(","),
                    clearAprioriList(rulesA.get(i).getConsequence().toString()));
        }

        return aprioriResults;
    }
}
