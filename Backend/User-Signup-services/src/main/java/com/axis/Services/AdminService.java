package com.axis.Services;

import java.util.List;

import com.axis.Entity.Admin;

public interface AdminService {

	public List<Admin> getAdmins();
	public Admin getAdminById(int id);
	public String addAdmin(Admin admin);
	public Admin updateAdmin(int id,Admin admin);
	public String deleteAdmin(int id);
	public Admin getAdminByEmail(String email);
	
}