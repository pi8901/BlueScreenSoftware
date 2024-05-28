package com.example.demo.service;

/**
 * Service class for getting file paths.
 */
public class getFilePath {

    /**
     * Gets the path for the data file.
     *
     * @return the path for the data file
     */
    public String getPath() {
        //return "C:\\Users\\marce\\IdeaProjects\\BlueScreenSoftware\\Data\\data.csv";
        // return "..\\..\\Data\\data.csv";
      return "C:\\Users\\ReneW\\Documents\\BlueScreenSoftware\\API\\src\\main\\resources\\static\\data.csv";
    }

    /**
     * Gets the path for the strategies file.
     *
     * @return the path for the strategies file
     */
    public String getStratPath() {
       //return "C:\\Users\\marce\\IdeaProjects\\BlueScreenSoftware\\Data\\strategies.csv";
        // return "..\\..\\Data\\strategies.csv";
       return "C:\\Users\\ReneW\\Documents\\BlueScreenSoftware\\API\\src\\main\\resources\\static\\strategies.csv";
    }
}
