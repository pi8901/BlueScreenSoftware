package com.example.demo.service;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Service;

import com.example.demo.api.model.absolute;

import weka.core.Instances;
import weka.core.converters.CSVLoader;

/**
 * Service class for computing absolute values.
 */
@Service
public class absoluteService {

    /** Service for getting file paths. */
    static getFilePath path;

    /**
     * Constructs a new absoluteService instance and initializes the file path.
     */
    public absoluteService() {
        path = new getFilePath();
    }

    /**
     * Computes the absolute values from the dataset.
     *
     * @return the absolute values
     * @throws IOException if an error occurs during the computation
     */
    public absolute getAbsolute() throws IOException {
        CSVLoader loader = new CSVLoader();
        loader.setSource(new File(path.getPath()));
        Instances data = loader.getDataSet();

        int attCount;
        int[][] abs = new int[9][9];

        for (int j = 0; j <= 8; j++) {
            // Anzahl der moeglichen Werte
            attCount = data.attributeStats(j).distinctCount;
            for (int i = 0; i < attCount; i++) {
                abs[j][i] = data.attributeStats(j).nominalCounts[i];
            }
        }
        return new absolute(abs);
    }
}
