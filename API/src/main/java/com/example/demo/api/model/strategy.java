package com.example.demo.api.model;

/**
 * Model class representing a strategy.
 */
public class strategy {
    private int id;
    private String title;
    private String desc;

    /**
     * Constructs a new strategy instance with the specified id, title, and description.
     *
     * @param index the id of the strategy
     * @param tip   the title of the strategy
     * @param desc  the description of the strategy
     * @param photo the photo of the strategy (not used in this implementation)
     */
    public strategy(int index, String tip, String desc, String photo) {
        this.id = index;
        this.title = tip;
        this.desc = desc;
    }

    /**
     * Gets the id of the strategy.
     *
     * @return the id of the strategy
     */
    public int getId() {
        return id;
    }

    /**
     * Gets the title of the strategy.
     *
     * @return the title of the strategy
     */
    public String getTitle() {
        return title;
    }

    /**
     * Gets the cover image of the strategy.
     *
     * @return the cover image of the strategy
     */
    public String getCoverImg() {
        return "slide_image";
    }

    /**
     * Gets the description of the strategy.
     *
     * @return the description of the strategy
     */
    public String getDesc() {
        return desc;
    }

    /**
     * Sets the id of the strategy.
     *
     * @param index the id of the strategy
     */
    public void setId(int index) {
        this.id = index;
    }

    /**
     * Sets the title of the strategy.
     *
     * @param tip the title of the strategy
     */
    public void setTitle(String tip) {
        this.title = tip;
    }

    /**
     * Sets the description of the strategy.
     *
     * @param descr the description of the strategy
     */
    public void setDesc(String descr) {
        this.desc = descr;
    }
}
