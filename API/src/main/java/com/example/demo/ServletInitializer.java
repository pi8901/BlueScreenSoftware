package com.example.demo;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * ServletInitializer is used to configure the application when it is launched by a servlet container.
 */
public class ServletInitializer extends SpringBootServletInitializer {

    /**
     * Configures the application.
     * 
     * @param application the SpringApplicationBuilder instance
     * @return the configured SpringApplicationBuilder instance
     */
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(WekaAnalysis.class);
    }
}
