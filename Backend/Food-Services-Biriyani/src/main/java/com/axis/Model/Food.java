package com.axis.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name="biryani")
@Table
public class Food {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	

	private int foodId;
	private String foodTitle;
	private String foodDiscription;
	private double foodPrice;
	private double foodDiscount;


	
	public Food() {
		super();
	}
	public Food(int foodId,String foodTitle,String foodDiscription,double foodPrice,double foodDiscount) {
		super();
		this.foodId=foodId;
		this.foodTitle=foodTitle;
		this.foodDiscription=foodDiscription;
		this.foodPrice=foodPrice;
		this.foodDiscount=foodDiscount;
	}
	
	public int getFoodId() {
		return foodId;
	}
	public void setFoodId(int foodId) {
		this.foodId = foodId;
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
	public double getFoodPrice() {
		return foodPrice;
	}
	public void setFoodPrice(double foodPrice) {
		this.foodPrice = foodPrice;
	}
	public double getFoodDiscount() {
		return foodDiscount;
	}
	public void setFoodDiscount(double foodDiscount) {
		this.foodDiscount = foodDiscount;
	}


}
