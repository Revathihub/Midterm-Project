package com.axis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class CartServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(CartServicesApplication.class, args);
	}

}
