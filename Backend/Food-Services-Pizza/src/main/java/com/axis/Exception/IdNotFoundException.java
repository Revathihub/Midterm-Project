package com.axis.Exception;

public class IdNotFoundException extends RuntimeException{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public IdNotFoundException(String msg) {
		super();
		this.msg=msg;
	}
	String msg;
	public String getErrormsg() {
		return msg;
	}

	
}
