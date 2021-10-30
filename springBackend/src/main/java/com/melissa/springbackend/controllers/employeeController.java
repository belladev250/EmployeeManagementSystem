package com.melissa.springbackend.controllers;

import com.melissa.springbackend.exceptions.ResourceNotFoundException;
import com.melissa.springbackend.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.melissa.springbackend.repositories.employeeRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class employeeController {
     @Autowired
    private employeeRepositories EmployeeRepository;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return  EmployeeRepository.findAll();
    }

    //create employees
    @PostMapping("/addEmployee")
    public Employee createEmployee(@RequestBody Employee employee){
        return EmployeeRepository.save(employee);
        }

        //get employees by id
    @GetMapping("/employees/{id}")
    public  ResponseEntity<Employee> getEmployeeById( @PathVariable Long id){
        Employee employee = EmployeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("employee does not exist" +id));
        return ResponseEntity.ok(employee);

    }

    // update employees by id
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@PathVariable Long id, @RequestBody Employee employeeDetails){
        Employee employee  = EmployeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException(("employee does not exist" +id )));
                employee.setFirstName(employeeDetails.getFirstName());
                employee.setLastName(employeeDetails.getLastName());
                employee.setEmailId(employeeDetails.getEmailId());

                Employee updatedEmployee  = EmployeeRepository.save(employee);
                return ResponseEntity.ok(updatedEmployee);

    }

    //delete employee by id
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployeeById( @PathVariable  Long id){
        Employee employee = EmployeeRepository.findById(id) .orElseThrow(()-> new ResourceNotFoundException(("employee does not exist" +id )));
        EmployeeRepository.delete(employee);
        Map<String,Boolean> response  = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
       return  ResponseEntity.ok(response);


    }

}
