package com.example.demo.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class getCSV {

    @PostMapping("/receiveString")
    public String receiveString(@RequestBody String longString) {
        // Process the received long string here
        System.out.println("Received string: " + longString);
        
        // Example response
        return "String received successfully";
    }
}
