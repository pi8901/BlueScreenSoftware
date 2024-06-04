package com.example.demo.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * HomeController is a Spring MVC Controller that handles HTTP requests for the home page.
 */
@Controller
public class HomeController {

    /**
     * Handles GET requests to the root URL ("/") and returns the name of the HTML file to be rendered.
     * 
     * @return the name of the HTML template file to be rendered (e.g., "index.html").
     */
    @GetMapping("/")
    public String home() {
        return "index.html"; // Replace with the name of your HTML template file (e.g., index.html)
    }
}
