package com.example.demo.api.model;

public class strategy {
    private int index;
    private String tip;
    private String photo;

    public strategy(int index, String tip, String photo) {
        this.index = index;
        this.tip = tip;
        this.photo = photo;
    }

    public int getIndex() {
        return index;
    }

    public String getTip() {
        return tip;
    }

    public String getPhoto() {
        return photo;
    }
}
