package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import com.example.demo.api.model.strategy;

@Service
public class strategiesService {

    getFilePath path;
    public strategiesService() 
    {
        path = new getFilePath();
    }

    public strategy[] getStrategies() {
        ArrayList<strategy> strategies = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(path.getStratPath()))) {
            String line;
            // Skip header line
            br.readLine();
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                int index = Integer.parseInt(parts[0]);
                String tip = parts[1];
                String photo = parts[2];
                strategy s = new strategy(index, tip, photo);
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
}


