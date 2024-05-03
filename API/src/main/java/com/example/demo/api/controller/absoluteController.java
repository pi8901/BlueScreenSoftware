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
        try {
            wekaFramework = new WekaFramework();
        } catch (Exception e) {
            e.printStackTrace();
        }
        abs = wekaFramework.attDistributionAbsolute(wekaFramework.alleDaten);
     }

     @GetMapping("/absolute")
     public absolute getAbsolute()
     {
         return abs;
     }
}
