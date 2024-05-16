package com.example.demo.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.api.model.strategy;
import com.example.demo.service.strategiesService;


@RestController
public class strategiesController 
{
        private strategiesService strategiesService;

    public strategiesController(strategiesService strategiesService)
    {
        this.strategiesService = strategiesService;
    }
    
    @GetMapping("/strategies")
    public strategy[] getData()
    {
        return strategiesService.getStrategies();
    }



    @PostMapping("/strategy")
    public ResponseEntity<String> createStrategy(@RequestBody strategy strategy) {
        // Logic to process the Strategy object
        System.out.println("Received Strategy object: " + strategy.getTitle());
        strategiesService.writeStrategy(strategy);
        return ResponseEntity.ok("Strategy object received");
    }
}
