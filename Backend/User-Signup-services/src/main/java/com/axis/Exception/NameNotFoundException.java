package com.axis.Exception;

public class NameNotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	String message;

	public NameNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public String getMessage() {
		return message;
	}

}