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


@Service
public class strategiesService {

    getFilePath path;
    static int counter;
    public strategiesService() {
        path = new getFilePath();
    }

    public strategy[] getStrategies() {
        ArrayList<strategy> strategies = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(path.getStratPath()))) {
            String line;
            // Skip header line
            // br.readLine();
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(";");
                int index = Integer.parseInt(parts[0]);
                String tip = parts[1];
                String photo = parts[3];
                String desc = parts[2];
                strategy s = new strategy(index, tip, desc, photo);
                strategies.add(s);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return strategies.toArray(new strategy[0]);
    }

    public static void main(String[] args) {
        strategiesService strategiesService = new strategiesService();
        strategy[] strategies = strategiesService.getStrategies();
        for (strategy s : strategies) {
            System.out.println(s);
        }
    }

    public void writeStrategy(strategy strategy) {
        // write the strategy to the csv file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(path.getStratPath(), true))) {
            // Write the strategy object to CSV
            writer.write(counter + ";" + strategy.getTitle() + ";" + strategy.getDesc() + ";"
                    + strategy.getCoverImg());
            writer.newLine();
            System.out.println("Strategy object has been written to CSV successfully!");
            writer.close();
            counter++;
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void deleteStrategy(int id) {
        try (BufferedReader br = new BufferedReader(new FileReader(path.getStratPath()))) {
            String line;
            StringBuffer inputBuffer = new StringBuffer();
            // br.readLine();
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
            // write the new String with the replaced line OVER the same file
            FileOutputStream fileOut = new FileOutputStream(path.getStratPath());
            fileOut.write(inputStr.getBytes());
            fileOut.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}