package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * Main class for running the WekaAnalysis application.
 */
@SpringBootApplication
public class WekaAnalysis extends SpringBootServletInitializer {

    /**
     * Main method to start the Spring Boot application.
     *
     * @param args the command-line arguments
     */
    public static void main(String[] args) {
        SpringApplication.run(WekaAnalysis.class, args);
    }

    /**
     * Configures the Spring application builder.
     *
     * @param application the Spring application builder
     * @return the configured Spring application builder
     */
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(WekaAnalysis.class);
    }
}
