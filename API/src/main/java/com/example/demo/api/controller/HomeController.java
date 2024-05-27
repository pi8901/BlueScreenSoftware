package com.example.demo.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index.html"; // Hier den Namen deiner HTML-Vorlagendatei einsetzen (z. B. index.html)
    }
}