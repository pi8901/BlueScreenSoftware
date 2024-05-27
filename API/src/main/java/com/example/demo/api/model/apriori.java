package com.example.demo.api.model;

/**
 * Model class representing an Apriori association.
 */
public class apriori {
    private String[] premise;
    private String consequence;

    /**
     * Constructs a new Apriori instance with the specified premise and consequence.
     *
     * @param cart    the premise items
     * @param result  the consequence item
     */
    public apriori(String[] cart, String result) {
        this.premise = cart;
        this.consequence = result;
    }

    /**
     * Gets the premise items as a concatenated string.
     *
     * @return the concatenated premise items
     */
    public String getPremise() {
        StringBuilder result = new StringBuilder();
        for (String item : premise) {
            result.append(item).append(" ");
        }
        return result.toString();
    }

    /**
     * Gets the consequence item.
     *
     * @return the consequence item
     */
    public String getConsequence() {
        return consequence;
    }
}
