/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ca4;

import java.util.ArrayList;

/**
 *
 * @author Paulo
 */
//********* part D ********
public class Company {
    private String companyName;

    public Company() {
        companyName = "company";
    }
    
    public Company(String companyName) {
        this.companyName = companyName;
    }
    
public static void main(String[] args) {
        // TODO code application logic here
        
        ArrayList<Employee> staff = new ArrayList<>();
        
        Employee e4 = new Employee("Peter parker", "pp.gmail.com");
        staff.add(e4);
        
        
        
        for(int i = 0; i<staff.size(); i++){
           System.out.println(staff.get(i).getNextEmpNum());
           System.out.println(staff.get(i).getName());
           System.out.println(staff.size());
       }
}    
}
