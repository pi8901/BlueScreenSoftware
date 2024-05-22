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

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class strategiesController {
    private strategiesService strategiesService;

    public strategiesController(strategiesService strategiesService) {
        this.strategiesService = strategiesService;
    }

    @GetMapping("/strategies")
    public strategy[] getData() {
        return strategiesService.getStrategies();
    }

    @PostMapping("/strategy")
    public ResponseEntity<String> createStrategy(@RequestBody strategy strategy) {
        // Logic to process the Strategy object
        System.out.println("Received Strategy object: " + strategy.getTitle());
        strategiesService.writeStrategy(strategy);
        return ResponseEntity.ok("Strategy object received");
    }

    // a function that deletes a strategy by id
    @DeleteMapping("/deleteStrategy/{id}")
    public ResponseEntity<String> deleteStrategy(@PathVariable int id) {
        // Logic to process the Strategy object
        System.out.println("Received Strategy object: " + id);
        strategiesService.deleteStrategy(id);
        return ResponseEntity.ok("Strategy object deleted");
    }
}
