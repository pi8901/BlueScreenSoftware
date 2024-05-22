package com.example.demo.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class csvValidator {

    public static boolean checkCsvIntegrity(String filePath) {
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            int expectedColumns = -1;
            int rowNum = 0;

            while ((line = br.readLine()) != null) {
                rowNum++;
                String[] columns = line.split(",");

                if (expectedColumns == -1) {
                    // Set the expected number of columns from the first row
                    expectedColumns = columns.length;
                } else {
                    // Check if the current row has the expected number of columns
                    if (columns.length != expectedColumns) {
                        System.out.printf(
                                "Row %d does not have the expected number of columns. Expected: %d, Found: %d%n",
                                rowNum, expectedColumns, columns.length);
                        return false;
                    }
                }

                // Basic validation: check for non-empty fields
                for (int i = 0; i < columns.length; i++) {
                    if (columns[i].trim().isEmpty()) {
                        System.out.printf("Row %d, Column %d is empty.%n", rowNum, i + 1);
                        return false;
                    }

                    // Add any additional data type checks here (e.g., is the value an integer?)
                    // if (i == expectedIntegerColumnIndex && !isInteger(columns[i])) {
                    // System.out.printf("Row %d, Column %d is not a valid integer.%n", rowNum, i +
                    // 1);
                    // return false;
                    // }
                }
            }

        } catch (IOException e) {
            System.out.println("An error occurred while reading the CSV file: " + e.getMessage());
            return false;
        }

        System.out.println("The CSV file is valid.");
        return true;
    }

    // Helper method to check if a string is an integer
    private static boolean isInteger(String str) {
        try {
            Integer.parseInt(str);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    public static void main(String[] args) {
        String filePath = "API//src//main//resources//static//kd100.csv";
        boolean isValid = checkCsvIntegrity(filePath);
        System.out.println("CSV file integrity check: " + (isValid ? "Passed" : "Failed"));
    }
}
