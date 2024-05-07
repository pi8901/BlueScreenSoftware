package com.example.demo.api.model;

public class absolute 
{
    private int[] gender;
    private int[] age;
    private int[] children;
    private int[] single;
    private int[] job;
    private int[] day;
    private int[] time;
    private int[] distance;
    private int[] salary;

    public absolute(int[][] data)
    {
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

    public int[] getGender()
    {
        return this.gender;
    }

    // Helper method to shorten the array by removing zero values
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

    public int[] getAge()
    {
        return this.age;
    }

    public int[] getChildren()
    {
        return this.children;
    }

    public int[] getSingle()
    {
        return this.single;
    }

    public int[] getJob()
    {
        return this.job;
    }

    public int[] getDay()
    {
        return this.day;
    }

    public int[] getTime()
    {
        return this.time;
    }

    public int[] getDistance()
    {
        return this.distance;
    }

    public int[] getSalary()
    {
        return this.salary;
    }
}
