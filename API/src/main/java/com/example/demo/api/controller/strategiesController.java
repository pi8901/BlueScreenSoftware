package com.example.demo.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
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

    
    
}
