package com.microsoft.azurewebappdemo;

import java.util.logging.Logger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class Application {

	private static final Logger logger = Logger.getLogger(Application.class.getName());


	public static void main(String[] args) throws Throwable {
		SpringApplication.run(Application.class, args);
	}


}
