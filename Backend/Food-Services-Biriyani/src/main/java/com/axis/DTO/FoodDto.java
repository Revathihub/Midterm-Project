package com.axis.DTO;

public class FoodDto {
	
		private int foodId;
		private String foodTitle;
		private String foodDiscription;
		private double foodPrice;
		private double foodDiscount;

		
		public FoodDto() {
			super();
		}
		public FoodDto(int foodId,String foodTitle,String foodDiscription,double foodPrice,double foodDiscount) {
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
		public Double getFoodPrice() {
			return foodPrice;
		}
		public void setFoodPrice(double foodPrice) {
			this.foodPrice = foodPrice;
		}
		public Double getFoodDiscount() {
			return foodDiscount;
		}
		public void setFoodDiscount(double foodDiscount) {
			this.foodDiscount = foodDiscount;
		}
		
	}
