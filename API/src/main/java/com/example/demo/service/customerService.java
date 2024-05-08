package com.example.demo.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.api.model.customer;
import com.example.demo.api.model.enums;

@Service
public class customerService 
{
    
        private List<customer> customers = new ArrayList<customer>();
    
        public customerService() 
        {
            
        }
    
        public customer getCustomer(Integer id) 
        {
            for (customer customer: customers) 
            {
                if (customer.getId() == id) 
                {
                    return customer;
                }
            }
            return null;
        }

        public customer[] getCustomers()
        {
            return customers.toArray(new customer[0]);
        }
    
}
