package com.example.demo.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.service.turnoverService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class turnoverController {

    private turnoverService turnoverService;

    public turnoverController(turnoverService turnoverService) {
        this.turnoverService = turnoverService;
    }

    @GetMapping("/turnover/day")
    public String getDay() throws Exception {
        return turnoverService.getTurnover(new int[]{5,9});
    }

    @GetMapping("/turnover/hour")
    public String getHour() throws Exception {
        return turnoverService.getTurnover(new int[]{6,9});
    }

    @GetMapping("/turnover/customer")
    public String getCustomerDay() throws Exception {
        return turnoverService.getTurnover(new int[]{5,6});
    }
}
