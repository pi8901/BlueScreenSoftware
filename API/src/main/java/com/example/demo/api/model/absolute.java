package com.example.demo.api.model;

/**
 * Model class representing absolute values.
 */
public class absolute {

    /** Array representing gender data. */
    private int[] gender;

    /** Array representing age data. */
    private int[] age;

    /** Array representing children data. */
    private int[] children;

    /** Array representing single data. */
    private int[] single;

    /** Array representing job data. */
    private int[] job;

    /** Array representing day data. */
    private int[] day;

    /** Array representing time data. */
    private int[] time;

    /** Array representing distance data. */
    private int[] distance;

    /** Array representing salary data. */
    private int[] salary;

    /**
     * Constructs a new absolute instance with the provided data.
     *
     * @param data the absolute data
     */
    public absolute(int[][] data) {
        this.gender = shortenArray(data[0]);
        this.age = shortenArray(data[1]);
        this.children = shortenArray(data[2]);
        this.single = shortenArray(data[3]);
        this.job = shortenArray(data[4]);
        this.day = shortenArray(data[5]);
        this.time = shortenArray(data[6]);
        this.distance = shortenArray(data[7]);
        this.salary = shortenArray(data[8]);
    }

    /**
     * Retrieves the gender data.
     *
     * @return the gender data
     */
    public int[] getGender() {
        return this.gender;
    }

    /**
     * Retrieves the age data.
     *
     * @return the age data
     */
    public int[] getAge() {
        return this.age;
    }

    /**
     * Retrieves the children data.
     *
     * @return the children data
     */
    public int[] getChildren() {
        return this.children;
    }

    /**
     * Retrieves the single data.
     *
     * @return the single data
     */
    public int[] getSingle() {
        return this.single;
    }

    /**
     * Retrieves the job data.
     *
     * @return the job data
     */
    public int[] getJob() {
        return this.job;
    }

    /**
     * Retrieves the day data.
     *
     * @return the day data
     */
    public int[] getDay() {
        return this.day;
    }

    /**
     * Retrieves the time data.
     *
     * @return the time data
     */
    public int[] getTime() {
        return this.time;
    }

    /**
     * Retrieves the distance data.
     *
     * @return the distance data
     */
    public int[] getDistance() {
        return this.distance;
    }

    /**
     * Retrieves the salary data.
     *
     * @return the salary data
     */
    public int[] getSalary() {
        return this.salary;
    }

    /**
     * Helper method to shorten the array by removing zero values.
     *
     * @param array the array to shorten
     * @return the shortened array
     */
    private int[] shortenArray(int[] array) {
        int count = 0;
        for (int i = 0; i < array.length; i++) {
            if (array[i] != 0) {
                count++;
            }
        }
        int[] shortenedArray = new int[count];
        int index = 0;
        for (int i = 0; i < array.length; i++) {
            if (array[i] != 0) {
                shortenedArray[index] = array[i];
                index++;
            }
        }
        return shortenedArray;
    }
}
