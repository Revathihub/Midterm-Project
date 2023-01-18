package com.axis.Repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import com.axis.Model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Repository
@EnableJpaRepositories
public interface FoodRepository extends JpaRepository<Food,Integer>{

	public List<Food> findByFoodTitle(String foodTitle);


}
