package com.axis.Exception;

import java.time.LocalDateTime;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class GlobalException{
	@ExceptionHandler(IdNotFoundException.class)
	public ResponseEntity<ErrorInfo> idNotFound(IdNotFoundException exception){
		ErrorInfo errorinfo=new ErrorInfo();
		errorinfo.setErrormsg(exception.getErrormsg());
		errorinfo.setHttpStatus(HttpStatus.NOT_FOUND.toString());
		errorinfo.setDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorinfo,HttpStatus.NOT_FOUND);
		
	}
	@ExceptionHandler(TitleNotFoundException.class)
	public ResponseEntity<ErrorInfo> titleNotFound(TitleNotFoundException exception){
		ErrorInfo errorinfo=new ErrorInfo();
		errorinfo.setErrormsg(exception.getErrormsg());
		errorinfo.setHttpStatus(HttpStatus.NOT_FOUND.toString());
		errorinfo.setDateTime(LocalDateTime.now());
		return new ResponseEntity<ErrorInfo>(errorinfo,HttpStatus.NOT_FOUND);
		
	}

}
