package com.example.demo.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;


@RestController
public class getCSV {

    @PostMapping("/upload")
    public ResponseEntity<String> uploadCSV(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("Please select a file!", HttpStatus.BAD_REQUEST);
        }

        if (!file.getOriginalFilename().endsWith(".csv")) {
            return new ResponseEntity<>("Only CSV files are allowed!", HttpStatus.BAD_REQUEST);
        }

        try {
            InputStream inputStream = file.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));

            File outputFile = new File("API\\src\\main\\resources\\static","outputtt.csv");
            BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile));

            String line;
            while ((line = reader.readLine()) != null) {
                // Process each line of the CSV file here
                // You can parse the CSV data and save it to a database or do any other processing
                System.out.println(line);
                writer.write(line);
                writer.newLine();
            }

            reader.close();
            writer.close();
            inputStream.close();

            

            return new ResponseEntity<>("File uploaded successfully!", HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to process the file!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

