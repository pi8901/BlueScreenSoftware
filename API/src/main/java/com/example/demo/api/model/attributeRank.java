package com.example.demo.api.model;

/**
 * Model class representing an attribute rank.
 */
public class attributeRank {
    private String attribute;
    private int rank;
    private double value;

    /**
     * Constructs a new attributeRank instance with the specified attribute, rank, and value.
     *
     * @param attribute the attribute name
     * @param rank      the rank of the attribute
     * @param value     the value of the attribute
     */
    public attributeRank(String attribute, int rank, double value) {
        this.attribute = attribute;
        this.rank = rank;
        this.value = value;
    }

    /**
     * Gets the attribute name.
     *
     * @return the attribute name
     */
    public String getAttribute() {
        return attribute;
    }

    /**
     * Gets the rank of the attribute.
     *
     * @return the rank of the attribute
     */
    public int getRank() {
        return rank;
    }

    /**
     * Gets the value of the attribute.
     *
     * @return the value of the attribute
     */
    public double getValue() {
        return value;
    }
}
