package com.example.demo.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.service.turnoverService;

/**
 * Controller for handling requests related to turnover data.
 */
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class turnoverController {

    private final turnoverService turnoverService;

    /**
     * Constructs a new turnoverController with the specified turnoverService.
     *
     * @param turnoverService the turnoverService to be used by this controller
     */
    public turnoverController(turnoverService turnoverService) {
        this.turnoverService = turnoverService;
    }

    /**
     * Handles GET requests to the /turnover/day endpoint.
     *
     * @return a ResponseEntity containing the turnover data for the day
     */
    @GetMapping("/turnover/day")
    public ResponseEntity<String> getDay() {
        try {
            String result = turnoverService.getTurnover(new int[]{5, 9});
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to retrieve turnover data for the day");
        }
    }

    /**
     * Handles GET requests to the /turnover/hour endpoint.
     *
     * @return a ResponseEntity containing the turnover data for the hour
     */
    @GetMapping("/turnover/hour")
    public ResponseEntity<String> getHour() {
        try {
            String result = turnoverService.getTurnover(new int[]{6, 9});
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to retrieve turnover data for the hour");
        }
    }

    /**
     * Handles GET requests to the /turnover/customer endpoint.
     *
     * @return a ResponseEntity containing the turnover data by customer per day
     */
    @GetMapping("/turnover/customer")
    public ResponseEntity<String> getCustomerDay() {
        try {
            String result = turnoverService.getTurnover(new int[]{5, 6});
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to retrieve turnover data by customer per day");
        }
    }
}
