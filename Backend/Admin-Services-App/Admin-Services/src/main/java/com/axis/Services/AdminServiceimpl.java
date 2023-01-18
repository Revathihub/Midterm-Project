package com.axis.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.Exception.IdNotFoundException;
import com.axis.Entity.Admin;
import com.axis.Repository.AdminRepository;
import com.axis.Util.AppConstants;
@Service
public class AdminServiceimpl implements AdminService{
	@Autowired
	AdminRepository adminRepository;

	@Override
	public List<Admin> getAdmins() {
		// TODO Auto-generated method stub
		return adminRepository.findAll();
	}

	@Override
	public Admin getAdminById(int id) {
		// TODO Auto-generated method stub
		return adminRepository.findById(id).orElseThrow(()->new IdNotFoundException(AppConstants.IdNotFound));
	}

	@Override
	public String addAdmin(Admin admin) {
		// TODO Auto-generated method stub
		 
		adminRepository.save(admin);
		return AppConstants.Add_msg;
	}

	@Override
	public Admin updateAdmin(int id, Admin admin) {
		// TODO Auto-generated method stub
		Admin admin1= adminRepository.findById(id).orElseThrow(()->new IdNotFoundException(AppConstants.IdNotFound));
		admin1.setId(admin.getId());
		admin1.setEmail(admin.getEmail());
		admin1.setPassword(admin.getPassword());
		admin1.setPassword1(admin.getPassword1());
		return  adminRepository.save(admin1) ;
	}

	@Override
	public String deleteAdmin(int id) {
		// TODO Auto-generated method stub
		 adminRepository.deleteById(id);
		return AppConstants.DeleteMessage;
	}

	@Override
	public Admin getAdminByEmail(String email) {
		// TODO Auto-generated method stub
		
		return adminRepository.findByemail(email);
	}

}