package com.melissa.springbackend.repositories;

import com.melissa.springbackend.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface employeeRepositories extends JpaRepository<Employee,Long> {
}
