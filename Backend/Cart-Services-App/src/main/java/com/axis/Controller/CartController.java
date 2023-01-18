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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.Model.Cart;
import com.axis.Services.CartServices;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/cart/v1")
public class CartController {

	@Autowired
	CartServices cartServices;
	
	@GetMapping("/view")
	public ResponseEntity<List<Cart>> getAll() {
		List<Cart> order1=cartServices.getAll();
		return new ResponseEntity<List<Cart>>(order1,HttpStatus.OK);
	}
	@GetMapping("/greet")
	public String greet(){
		return "Hi Wellcome to Cart Services";
	}
	@PostMapping("/addToCart")
	public ResponseEntity<Cart> addToCart(@RequestBody Cart cart){
		Cart item=cartServices.addToCart(cart);
		return new ResponseEntity<Cart>(item,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{foodId}")
	public ResponseEntity<String> deleteFromCart(@PathVariable int foodId) {
		String item=cartServices.deleteFromCart(foodId);
		return new ResponseEntity<String>(item,HttpStatus.OK);
	}
	
	@GetMapping("/cartview")
	public ResponseEntity<List<Cart>> viewCart() {
		List<Cart> cart=cartServices.viewCart();
		return new ResponseEntity<List<Cart>>(cart,HttpStatus.OK);
	}
	
}
