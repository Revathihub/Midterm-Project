package com.axis.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.axis.Exception.UserException;
import com.axis.Model.Cart;
import com.axis.Repository.CartRepository;
import com.axis.Util.AppConstants;

@Service
public class CartServicesImp implements CartServices{
	
	@Autowired
	CartRepository cartRepository;
	
	//Convert to entity
	
	public List<Cart> getAll() {
		// TODO Auto-generated method stub
		return cartRepository.findAll();
	}

	@Override
	public Cart addToCart(Cart cart) {
		// TODO Auto-generated method stub
		Cart item=cartRepository.save(cart);
		return item;
	}

	@Override
	public String deleteFromCart(int foodId) {
		// TODO Auto-generated method stub
		Cart cartd=cartRepository.findById(foodId).orElseThrow(()-> new UserException(AppConstants.DELETE_MESSAGE));
		cartRepository.delete(cartd);
		return AppConstants.DELETE_MESSAGE;
	}

	@Override
	public List<Cart> viewCart() {
		// TODO Auto-generated method stub
		List<Cart> cart=cartRepository.findAll();
		if (cart.size()==0) {
			new UserException(AppConstants.CART_EMPTY_MSG);
		}
		return cart;
		
		
	}

}
