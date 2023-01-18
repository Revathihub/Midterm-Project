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

import com.axis.Entity.Admin;
import com.axis.Repository.AdminRepository;
import com.axis.Services.AdminService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/users/v1")
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@Autowired
	AdminRepository adminRepository;
	
	@GetMapping("/greet")
	public String greet() {
		return "Wellcome to AdminServices";
	}
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/add")
	public ResponseEntity<String> addAdmin(@RequestBody Admin admin) {
		String email=admin.getEmail();
		Admin admin1=adminService.getAdminByEmail(email);
		if(admin1 != null) {
			String msg="Email Id Already Taken";
			return new ResponseEntity<String>(msg,HttpStatus.OK);	
			
		}else {
			return new ResponseEntity<>(adminService.addAdmin(admin),HttpStatus.OK);
		}
		
	}
	
	@GetMapping("/view")
	public ResponseEntity<List<Admin>> getAdmins(){
		return new ResponseEntity<List<Admin>>(adminService.getAdmins(),HttpStatus.OK);
	}
	
	@GetMapping("/validate/{email}")
	public ResponseEntity<String> getAdminByEmail(@PathVariable String email){
		Admin admin=adminService.getAdminByEmail(email);
		System.out.println(admin);
		if(admin !=null) {
			String msg="Valid User";
			return new ResponseEntity<String>(msg,HttpStatus.OK);

		}else {
			String msg="Invalid Login Details!!";
			return new ResponseEntity<String>(msg,HttpStatus.OK);
		}
		
	}
	
	@GetMapping("id/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable int id){
		Admin admin=adminService.getAdminById(id);
		return new ResponseEntity<Admin>(admin,HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable int id,@RequestBody Admin admin){
		return new ResponseEntity<Admin>(adminService.updateAdmin(id, admin),HttpStatus.OK);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteAdmin(@PathVariable int id){
		return new ResponseEntity<String>(adminService.deleteAdmin(id),HttpStatus.OK);
	}
	
}