package com.axis.Exception;

public class TitleNotFoundException  extends RuntimeException{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public TitleNotFoundException(String msg) {
		super();
		this.msg=msg;
	}
	String msg;
	public String getErrormsg() {
		return msg;
	}

	
}

