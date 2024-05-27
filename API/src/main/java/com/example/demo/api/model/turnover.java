package com.example.demo.api.model;

/**
 * Model class representing turnover data.
 */
public class turnover {
    private String name;
    private int rank;
    private double value;

    /**
     * Constructs a new turnover instance with the specified name, rank, and value.
     *
     * @param name  the name of the turnover data
     * @param rank  the rank of the turnover data
     * @param value the value of the turnover data
     */
    public turnover(String name, int rank, double value) {
        this.name = name;
        this.rank = rank;
        this.value = value;
    }

    /**
     * Gets the name of the turnover data.
     *
     * @return the name of the turnover data
     */
    public String getName() {
        return name;
    }

    /**
     * Gets the rank of the turnover data.
     *
     * @return the rank of the turnover data
     */
    public int getRank() {
        return rank;
    }

    /**
     * Gets the value of the turnover data.
     *
     * @return the value of the turnover data
     */
    public double getValue() {
        return value;
    }
}
