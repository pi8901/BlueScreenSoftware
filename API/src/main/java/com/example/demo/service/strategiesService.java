package com.example.demo.service;

import com.example.demo.api.model.strategy;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Service class for managing strategy objects using CSV file operations.
 */
@Service
public class strategiesService {

    private final getFilePath path = new getFilePath();
    private final String CSV_FILE_PATH = path.getStratPath();

    /**
     * Writes a strategy object to the CSV file.
     *
     * @param strat the strategy object to be written to the file
     * @throws CsvValidationException if a CSV validation error occurs
     * @throws NumberFormatException  if a number format error occurs
     */
    public void writeStrategy(strategy strat) throws CsvValidationException, NumberFormatException {
        try (CSVWriter writer = new CSVWriter(new FileWriter(CSV_FILE_PATH, true))) {
            String[] record = {String.valueOf(findNextLowestId()), strat.getTitle(), strat.getDesc()};
            writer.writeNext(record);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * Reads all strategy objects from the CSV file.
     *
     * @return a list of strategy objects read from the file
     * @throws CsvValidationException if a CSV validation error occurs
     * @throws NumberFormatException  if a number format error occurs
     */
    public List<strategy> readStrategies() throws CsvValidationException, NumberFormatException {
        List<strategy> strategies = new ArrayList<>();
        try (CSVReader reader = new CSVReader(new FileReader(CSV_FILE_PATH))) {
            String[] nextLine;
            while ((nextLine = reader.readNext()) != null) {
                if (nextLine.length > 0) {
                    int id = Integer.parseInt(nextLine[0]);
                    String title = nextLine[1];
                    String desc = nextLine[2];
                    strategies.add(new strategy(id, title, desc, ""));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return strategies;
    }

    /**
     * Deletes a strategy object from the CSV file by ID.
     *
     * @param id the ID of the strategy object to be deleted
     * @throws CsvValidationException if a CSV validation error occurs
     * @throws NumberFormatException  if a number format error occurs
     */
    public void deleteStrategy(int id) throws CsvValidationException, NumberFormatException {
        File inputFile = new File(CSV_FILE_PATH);
        File tempFile = new File("strategies_temp.csv");

        try (CSVReader reader = new CSVReader(new FileReader(inputFile));
             CSVWriter writer = new CSVWriter(new FileWriter(tempFile))) {

            String[] nextLine;
            while ((nextLine = reader.readNext()) != null) {
                if (Integer.parseInt(nextLine[0]) != id) {
                    writer.writeNext(nextLine);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Delete original file
        if (!inputFile.delete()) {
            System.out.println("Could not delete file");
            return;
        }
        // Rename temp file to original file
        if (!tempFile.renameTo(inputFile)) {
            System.out.println("Could not rename file");
        }
    }

    /**
     * Finds the next lowest ID available for a new strategy object.
     *
     * @return the next lowest ID
     * @throws CsvValidationException if a CSV validation error occurs
     * @throws NumberFormatException  if a number format error occurs
     */
    public int findNextLowestId() throws CsvValidationException, NumberFormatException {
        int nextId = 1;
        try (CSVReader reader = new CSVReader(new FileReader(CSV_FILE_PATH))) {
            String[] nextLine;
            int maxId = 0;
            while ((nextLine = reader.readNext()) != null) {
                if (nextLine.length > 0) {
                    int currentId = Integer.parseInt(nextLine[0]);
                    if (currentId > maxId) {
                        maxId = currentId;
                    }
                }
            }
            nextId = maxId + 1;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return nextId;
    }
}
