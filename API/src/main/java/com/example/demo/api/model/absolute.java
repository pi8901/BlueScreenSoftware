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
        this.gender = data[0];
        this.age = data[1];
        this.children = data[2];
        this.single = data[3];
        this.job = data[4];
        this.day = data[5];
        this.time = data[6];
        this.distance = data[7];
        this.salary = data[8];
    }

    public int[] getGender()
    {
        return this.gender;
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
