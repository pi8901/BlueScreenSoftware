package com.example.demo.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.example.demo.api.model.strategy;

/**
 * Service class for handling strategies.
 */
@Service
public class strategiesService {

    /** Service for getting file paths. */
    getFilePath path;

    /** Counter for generating strategy IDs. */
    static int counter;

    /**
     * Constructs a new strategiesService instance and initializes the file path and counter.
     */
    public strategiesService() {
        path = new getFilePath();
        counter = getlastIndex();
    }

    /**
     * Gets the last index of strategies.
     *
     * @return the last index of strategies
     */
    private int getlastIndex() {
        return getStrategies().length;
    }

    /**
     * Retrieves strategies from the CSV file.
     *
     * @return an array of strategies
     */
    public strategy[] getStrategies() {
        ArrayList<strategy> strategies = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(path.getStratPath()))) {
            StringBuilder lineBuilder = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                if (lineBuilder.length() > 0) {
                    lineBuilder.append("\n");
                }
                lineBuilder.append(line);

                String completeLine = lineBuilder.toString();
                String[] parts = completeLine.split(";");
                if (parts.length == 4) {  // assuming a valid line has exactly 4 parts
                    int index = Integer.parseInt(parts[0]);
                    String tip = parts[1];
                    String desc = parts[2];
                    String photo = parts[3];
                    strategy s = new strategy(index, tip, desc, photo);
                    strategies.add(s);
                    lineBuilder.setLength(0); // reset the builder for the next line
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return strategies.toArray(new strategy[0]);
    }

    /**
     * Writes a strategy to the CSV file.
     *
     * @param strategy the strategy to be written
     */
    public void writeStrategy(strategy strategy) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(path.getStratPath(), true))) {
            // Write the strategy object to CSV
            writer.write(counter + ";" + strategy.getTitle() + ";" + strategy.getDesc() + ";"
                    + strategy.getCoverImg());
            writer.newLine();
            writer.close();
            counter++;
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * Deletes a strategy from the CSV file by its ID.
     *
     * @param id the ID of the strategy to be deleted
     */
    public void deleteStrategy(int id) {
        try (BufferedReader br = new BufferedReader(new FileReader(path.getStratPath()))) {
            String line;
            StringBuffer inputBuffer = new StringBuffer();
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(";");
                int index = Integer.parseInt(parts[0]);
                if (index != id) {
                    inputBuffer.append(line);
                    inputBuffer.append('\n');
                }
            }
            String inputStr = inputBuffer.toString();
            br.close();
            FileOutputStream fileOut = new FileOutputStream(path.getStratPath());
            fileOut.write(inputStr.getBytes());
            fileOut.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
