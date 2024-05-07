package com.example.demo.api.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.api.model.customer;
import com.example.demo.api.model.enums;
import com.example.demo.service.WekaFramework;

@RestController
public class customerController 
{

    String data;

    public customerController(WekaFramework wekaFramework)
    {
        try {
            wekaFramework = new WekaFramework();
            data = wekaFramework.findCluster(wekaFramework.alleDaten, 5);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
    }
    
    /*@GetMapping("/customer")
    public customer getUser(@RequestParam Integer id)
    {
        return customerService.getCustomer(id);
    }*/

    @GetMapping("/customers")
    public List<customer> getAllCustomers()
    {
        String[] lines = data.split("\n");
        List<customer> customers = new ArrayList<>();

        for (String line : lines) {
            String[] parts = line.split(",");
            boolean isMale = parts[0].equals("m");
            enums.age age = enums.age.valueOf("_" + parts[1].replace("-", "_").replaceAll(">","")); // Add underscore
            boolean hasChildren = parts[2].equalsIgnoreCase("ja");
            boolean isSingle = parts[3].equalsIgnoreCase("ledig");
            boolean hasJob = parts[4].equalsIgnoreCase("ja");
            enums.day day = enums.day.valueOf(parts[5]);
            enums.time time = enums.time.valueOf(parts[6].replaceAll("<","").replaceAll("[ ']", "_").replace("-","_").replaceAll(">","")); // Convert to enum
            enums.distance distance = enums.distance.valueOf(parts[7].replaceAll("-","").replaceAll("[ ']", "_").replace("<", "").replace("__","_")); // Convert to enum
            enums.salary salary = enums.salary.valueOf("_" + parts[8].replace("-", "_").replaceAll("<","")); // Convert to enum

            double[] cart = new double[parts.length - 9];
            for (int i = 9; i < parts.length; i++) {
                cart[i - 9] = Double.parseDouble(parts[i]);
            }

            customer customer = new customer(isMale, age, hasChildren, isSingle, hasJob, day, time, distance, salary, cart);
            customers.add(customer);
        }

        return customers;
    }
}
