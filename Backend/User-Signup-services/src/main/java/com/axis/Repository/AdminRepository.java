package com.axis.Repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.Entity.Admin;
@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer> {

	public Admin findByemail(String email);

	
}