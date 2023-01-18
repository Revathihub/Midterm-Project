package com.axis.Model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="Cart")
public class Cart {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int foodId;
	private String foodImageUrl;
	private String foodTitle;
	private String foodDiscription;
	private double price;
	private double Discount;
	private String Quantity;
	private Date date;
	
	public Cart(int foodId,String foodTitle,String foodDiscription,String Quantity,double price,double Discount,Date date) {
		super();
		this.foodId=foodId;
		this.foodTitle=foodTitle;
		this.foodDiscription=foodDiscription;
		this.price=price;
		this.Discount=Discount;
		this.Quantity=Quantity;
		this.date=date;
	}
	
	public Cart() {
		super();
	}
	
	public double getDiscount() {
		return Discount;
	}
	public void setDiscount(double discount) {
		Discount = discount;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getPrice(double price) {
		return price;
	}
	public int getFoodId() {
		return foodId;
	}

	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}

	public String getFoodImageUrl() {
		return foodImageUrl;
	}

	public void setFoodImageUrl(String foodImageUrl) {
		this.foodImageUrl = foodImageUrl;
	}

	public String getFoodTitle() {
		return foodTitle;
	}

	public void setFoodTitle(String foodTitle) {
		this.foodTitle = foodTitle;
	}

	public String getFoodDiscription() {
		return foodDiscription;
	}

	public void setFoodDiscription(String foodDiscription) {
		this.foodDiscription = foodDiscription;
	}

	public String getQuantity() {
		return Quantity;
	}

	public void setQuantity(String quantity) {
		Quantity = quantity;
	}


	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	
}

