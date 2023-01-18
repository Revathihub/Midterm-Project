package com.axis.Services;

import java.util.List;

import com.axis.Model.Cart;

public interface CartServices {

	public Cart addToCart (Cart cart);
	public String deleteFromCart(int foodId);
	public List<Cart> viewCart();
	public List<Cart> getAll();

	
}
