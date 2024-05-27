package com.example.demo.api.model;

/**
 * Class containing enums for various attributes.
 */
public class enums {

    /**
     * Enum for age groups.
     */
    public enum age {
        _18_30, _31_40, _41_50, _51_60, _60
    }

    /**
     * Enum for days of the week.
     */
    public enum day {
        Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag
    }

    /**
     * Enum for distance categories.
     */
    public enum distance {
        _10_km_, _10_25_km_, _25_km_
    }

    /**
     * Enum for time periods.
     */
    public enum time {
        _10_Uhr_, _10_12_Uhr_, _14_17_Uhr_, _17_Uhr_
    }

    /**
     * Enum for salary ranges.
     */
    public enum salary {
        _1000, _1000_2000, _2000_3200, _3200_4500, _4500
    }
}
