package com.example.demo.api.model;

public class apriori 
{
    private String[] premise;
    private String consequence;

    public apriori(String[] cart, String result) 
    {
        this.premise = cart;
        this.consequence = result;
    }

    public String getPremise() {

        String result = "";
        for (int i = 0; i < premise.length; i++) 
        {
            result += premise[i] + " ";
        }
        return result;
    }

    public String getConsequence() {
        return consequence;
    }   
}
