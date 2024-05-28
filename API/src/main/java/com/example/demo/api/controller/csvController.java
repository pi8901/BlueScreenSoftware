package com.example.demo.api.controller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * Controller for handling CSV file uploads.
 */
@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class csvController {

    /**
     * Handles POST requests to the /upload endpoint for uploading CSV files.
     *
     * @param file the CSV file to be uploaded
     * @return a ResponseEntity with a success or error message and the appropriate HTTP status code
     */
    @SuppressWarnings("null")
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

            File outputFile = new File("..\\..\\Data\\data.csv");
            BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile));

            String line;
            while ((line = reader.readLine()) != null) {
                writer.write(line);
                writer.newLine();
            }

            reader.close();
            writer.close();
            inputStream.close();

            return new ResponseEntity<>("File uploaded successfully!", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Failed to process the file!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
