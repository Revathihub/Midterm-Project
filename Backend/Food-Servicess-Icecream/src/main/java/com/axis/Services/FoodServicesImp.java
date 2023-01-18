package com.axis.Services;

import java.util.ArrayList;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.DTO.FoodDto;
import com.axis.Exception.IdNotFoundException;
import com.axis.Exception.TitleNotFoundException;
import com.axis.Model.Food;
import com.axis.Repository.FoodRepository;
import com.axis.Utility.AppConstants;

@Service
public class FoodServicesImp implements FoodServices {
	
	@Autowired 
    FoodRepository foodrepository;
	
	//From food to  FoodDto 
	private FoodDto convertToFoodDto(Food food) {
		FoodDto foodDto=new ModelMapper().map(food,FoodDto.class);
		return foodDto;
	}
	
	

	//from FoodDto to Food
	private Food convertToFood(FoodDto foodDto) {
		Food food=new ModelMapper().map(foodDto, Food.class);
		return food;
	}
	public List<Food> getAll() {
		// TODO Auto-generated method stub
		List<Food> items=foodrepository.findAll();
		List<Food> foods=new ArrayList<>();
		for(Food item:items) {
			foods.add(item);
		}
		return foods;
		
	}

	@Override
	public FoodDto addFood(FoodDto fooddto) {
		// TODO Auto-generated method stub
		Food items=foodrepository.save(convertToFood(fooddto));
		return convertToFoodDto(items);
		
	}

	@Override
	public String deleteFoodById(int foodId) {
		// TODO Auto-generated method stub
		Food food=foodrepository.findById(foodId).orElseThrow(()-> new IdNotFoundException(AppConstants.ID_NOT_FOUND));
		foodrepository.delete(food);
		return AppConstants.DELETE_MESSAGE;
	
	}

	@Override
	public Food  updateFoodById(int foodId,Food food ) {
		// TODO Auto-generated method stub
		Food item=foodrepository.findById(foodId).orElseThrow(()-> new IdNotFoundException(AppConstants.ID_NOT_FOUND));
		item.setFoodId(food.getFoodId());
		item.setFoodTitle(food.getFoodTitle());
		item.setFoodDiscription(food.getFoodDiscription());
		item.setFoodPrice(food.getFoodPrice());
		item.setFoodDiscount(food.getFoodDiscount());
		foodrepository.save(item);
		return item;
	}

	@Override
	public List<Food> searchFoodByTitle(String foodTitle) {
		// TODO Auto-generated method stub
		List<Food> food=foodrepository.findByFoodTitle(foodTitle);
		List<Food> foods=new ArrayList<>();
		for(Food item:food) {
			
			foods.add(item);
		}
		return foods;
	}
	
	@Override
	public FoodDto searchFoodById(int foodId) {
		// TODO Auto-generated method stub
		Food item=foodrepository.findById(foodId).orElseThrow(()-> new IdNotFoundException(AppConstants.ID_NOT_FOUND));
		return convertToFoodDto(item);
	}
	
	
}
