package com.axis.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.Model.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart,Integer> {
	

}
