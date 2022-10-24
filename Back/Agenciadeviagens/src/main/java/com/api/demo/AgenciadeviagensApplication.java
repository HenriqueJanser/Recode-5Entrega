package com.api.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.api.model"})
@EnableJpaRepositories(basePackages = {"com.api.repositories"})
@ComponentScan(basePackages = {"com.api.controller", "com.api.serviceImpl"})
@SpringBootApplication
public class AgenciadeviagensApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgenciadeviagensApplication.class, args);
	}

}
