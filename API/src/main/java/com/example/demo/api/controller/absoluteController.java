package com.example.demo.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.model.absolute;
import com.example.demo.service.WekaFramework;

@RestController
public class absoluteController 
{

    absolute abs;
     public absoluteController(WekaFramework wekaFramework)
     {

     }

     @GetMapping("/absolute")
     public absolute getAbsolute()
     {
        try {
           WekaFramework wekaFramework = new WekaFramework();
           abs = wekaFramework.attDistributionAbsolute(wekaFramework.alleDaten);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
         return abs;
     }
}
