package com.example.demo.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.WekaFramework;

@RestController
public class aprioriController 
{

     String[] data;
     public aprioriController(WekaFramework wekaFramework)
     {
        //data[0]  = "test";
        try {
            wekaFramework = new WekaFramework();
            String[] aprioriResult = wekaFramework.makeApriori(wekaFramework.nurWaren);
            System.out.println(aprioriResult);
            data = wekaFramework.makeApriori(wekaFramework.nurWaren);
            //System.out.println(data);
        } catch (Exception e) {
            e.printStackTrace();
        }
     }

     @GetMapping("/apriori")
     public String[] getApriori()
     {
         return data;
     }

}
