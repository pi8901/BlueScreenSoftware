package com.example.demo.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.model.strategy;
import com.example.demo.service.strategiesService;

/**
 * Controller for handling requests related to strategies.
 */
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class strategiesController {

    private final strategiesService strategiesService;

    /**
     * Constructs a new strategiesController with the specified strategiesService.
     *
     * @param strategiesService the strategiesService to be used by this controller
     */
    public strategiesController(strategiesService strategiesService) {
        this.strategiesService = strategiesService;
    }

    /**
     * Handles GET requests to the /strategies endpoint.
     *
     * @return an array of strategy objects
     */
    @GetMapping("/strategies")
    public strategy[] getData() {
        return strategiesService.getStrategies();
    }

    /**
     * Handles POST requests to the /strategy endpoint for creating a new strategy.
     *
     * @param strategy the strategy object to be created
     * @return a ResponseEntity with a success message and the appropriate HTTP status code
     */
    @PostMapping("/strategy")
    public ResponseEntity<String> createStrategy(@RequestBody strategy strategy) {
        try {
            strategiesService.writeStrategy(strategy);
            return ResponseEntity.ok("Strategy object received");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to create strategy");
        }
    }

    /**
     * Handles DELETE requests to the /deleteStrategy/{id} endpoint for deleting a strategy by id.
     *
     * @param id the id of the strategy to be deleted
     * @return a ResponseEntity with a success message and the appropriate HTTP status code
     */
    @DeleteMapping("/deleteStrategy/{id}")
    public ResponseEntity<String> deleteStrategy(@PathVariable int id) {
        try {
            strategiesService.deleteStrategy(id);
            return ResponseEntity.ok("Strategy object deleted");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to delete strategy");
        }
    }
}
