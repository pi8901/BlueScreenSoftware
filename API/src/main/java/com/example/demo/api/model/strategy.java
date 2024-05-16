package com.example.demo.api.model;

public class strategy {
    private int id;
    private String title;
    private String desc;

    public strategy(int index, String tip, String desc, String photo ) {
        this.id = index;
        this.title = tip;
        this.desc = desc;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getCoverImg() {
        return "slide_image";
    }

    public String getDesc() {
        return desc;
    }

    public void setId(int index) {
        this.id = index;
    }

    public void setTitle(String tip) {
        this.title = tip;
    }

    public void setCoverImg(String photo) {
        this.coverImg = "slide_image";
    }

    public void setDesc(String descr) {
        this.desc = descr;
    }
}
