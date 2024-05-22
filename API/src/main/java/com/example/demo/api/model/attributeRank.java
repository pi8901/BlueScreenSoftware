package com.example.demo.api.model;

public class attributeRank {
    private String attribute;
    private int rank;
    private double value;

    public attributeRank(String attribute, int rank, double value) {
        this.attribute = attribute;
        this.rank = rank;
        this.value = value;
    }

    public String getAttribute() {
        return attribute;
    }

    public int getRank() {
        return rank;
    }

    public double getValue() {
        return value;
    }
}
