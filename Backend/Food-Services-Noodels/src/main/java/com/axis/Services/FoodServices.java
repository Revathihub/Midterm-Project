package com.axis.Services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

import com.axis.DTO.FoodDto;
import com.axis.Model.Food;

public interface FoodServices {
	public FoodDto  addFood(FoodDto fooddto);
	public Food  updateFoodById(int foodId,Food food);
	public List<Food> searchFoodByTitle(String foodTitle);
	public String deleteFoodById(int foodId);
	public List<Food> getAll();
	public FoodDto searchFoodById(int foodId);

}
