package com.axis.Exception;

import java.time.LocalDateTime;

public class ErrorInfo {
	private String Errormsg;
	private String HttpStatus;
	private LocalDateTime DateTime;
	
	public ErrorInfo() {
		super();
	}
	public ErrorInfo(String Errormsg,String HttpStatus,LocalDateTime DateTime) {
		super();
		this.Errormsg=Errormsg;
		this.HttpStatus=HttpStatus;
		this.DateTime=DateTime;
	}
	public String getErrormsg() {
		return Errormsg;
	}
	public void setErrormsg(String errormsg) {
		this.Errormsg = errormsg;
	}
	public String getHttpStatus() {
		return HttpStatus;
	}
	public void setHttpStatus(String httpStatus) {
		this.HttpStatus = httpStatus;
	}
	public LocalDateTime getDateTime() {
		return DateTime;
	}
	public void setDateTime(LocalDateTime dateTime) {
		this.DateTime = dateTime;
	}



	
	
	
}
