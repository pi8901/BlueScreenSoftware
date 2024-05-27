package com.example.demo.api.controller;

import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.model.absolute;
import com.example.demo.service.absoluteService;

/**
 * Controller class for handling absolute values.
 */
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class absoluteController {

    /** Service for handling absolute values. */
    private absoluteService absoluteService;

    /**
     * Constructs a new absoluteController instance with the provided absoluteService.
     *
     * @param absoluteService the service for handling absolute values
     */
    public absoluteController(absoluteService absoluteService) {
        this.absoluteService = absoluteService;
    }

    /**
     * Retrieves the absolute value.
     *
     * @return the absolute value
     * @throws IOException if an error occurs during the retrieval
     */
    @GetMapping("/absolute")
    public absolute getAbsolute() throws IOException {
        return absoluteService.getAbsolute();
    }
}
