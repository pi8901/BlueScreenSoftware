package com.example.demo.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.model.apriori;
import com.example.demo.service.aprioriService;

/**
 * Controller for handling requests related to the Apriori algorithm.
 */
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class aprioriController {

    private aprioriService aprioriService;

    /**
     * Constructs a new aprioriController with the specified aprioriService.
     *
     * @param aprioriService the aprioriService to be used by this controller
     */
    public aprioriController(aprioriService aprioriService) {
        this.aprioriService = aprioriService;
    }

    /**
     * Handles GET requests to the /apriori endpoint.
     *
     * @return an array of apriori objects
     * @throws Exception if an error occurs while retrieving Apriori data
     */
    @GetMapping("/apriori")
    public apriori[] getApriori() throws Exception {
        return aprioriService.getApriori();
    }
}
