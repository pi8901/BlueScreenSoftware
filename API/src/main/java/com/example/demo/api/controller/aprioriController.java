package com.example.demo.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.model.apriori;
import com.example.demo.service.aprioriService;

@RestController
@CrossOrigin(origins = "http://localhost:5173") 
public class aprioriController 
{

    private aprioriService aprioriService;

     public aprioriController(aprioriService aprioriService)
     {
        this.aprioriService = aprioriService;
     }

     @GetMapping("/apriori")
     public apriori[] getApriori() throws Exception
     {
         return aprioriService.getApriori();
     }

}
