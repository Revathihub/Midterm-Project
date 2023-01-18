package com.axis.Controller;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.DTO.FoodDto;
import com.axis.Model.Food;
import com.axis.Services.FoodServices;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/ice/v1")
public class FoodController {
	
	@Autowired 
	FoodServices foodservices;
	
	@GetMapping("/view")
	public ResponseEntity<List<Food>> getAll() {
		List<Food> item=foodservices.getAll();
		return new ResponseEntity<List<Food>>(item,HttpStatus.OK);
	}
	
	@GetMapping("/greet")
	public String greet(){
		return "Hello wellcome to Food Services";
	}
	@PostMapping("/add")
	public ResponseEntity<FoodDto> addFood(@RequestBody FoodDto fooddto) {
		FoodDto food=foodservices.addFood(fooddto);
		return new ResponseEntity<FoodDto>(food,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{foodId}")
	public ResponseEntity<String> deleteFoodById(@PathVariable int foodId ){
		String food=foodservices.deleteFoodById(foodId);
		return new ResponseEntity<String>(food,HttpStatus.OK);
	} 
	
	@PutMapping("/update/{foodId}")
	public ResponseEntity<Food>updateFoodById(@PathVariable(value="foodId") int foodId,@RequestBody Food food){
		Food item=foodservices.updateFoodById(foodId,food);
		return new ResponseEntity<Food>(item,HttpStatus.OK);
	}
	
	@GetMapping("/{foodTitle}")
	public ResponseEntity<List<Food>> searchFoodByTitle(@PathVariable String foodTitle){
		List<Food> food=foodservices.searchFoodByTitle(foodTitle);
		return new ResponseEntity<List<Food>>(food,HttpStatus.OK);
	}
	

	@GetMapping("/id/{foodId}")
	public ResponseEntity<FoodDto> searchFoodById(@PathVariable int foodId){
		FoodDto food=foodservices.searchFoodById(foodId);
		return new ResponseEntity<FoodDto>(food,HttpStatus.OK);
	}
}
