package com.example.demo.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.model.attributeRank;
import com.example.demo.service.topFlopService;

@RestController
public class topFlopController {

    private topFlopService topFlopService;

    public topFlopController(topFlopService topFlopService)
    {
        this.topFlopService = topFlopService;
    }
    
    @GetMapping("/topflop")
    public attributeRank[] getData()
    {
        return topFlopService.getTopFlop();
        
    }
}