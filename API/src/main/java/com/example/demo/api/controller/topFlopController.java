package com.example.demo.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.api.model.attributeRank;
import com.example.demo.service.topFlopService;

/**
 * Controller for handling requests related to top and flop attributes.
 */
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class topFlopController {

    private final topFlopService topFlopService;

    /**
     * Constructs a new topFlopController with the specified topFlopService.
     *
     * @param topFlopService the topFlopService to be used by this controller
     */
    public topFlopController(topFlopService topFlopService) {
        this.topFlopService = topFlopService;
    }

    /**
     * Handles GET requests to the /topflop endpoint.
     *
     * @return a ResponseEntity containing an array of attributeRank objects
     */
    @GetMapping("/topflop")
    public ResponseEntity<attributeRank[]> getData() {
        try {
            attributeRank[] data = topFlopService.getTopFlop();
            return ResponseEntity.ok(data);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
