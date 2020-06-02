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
public class EmployeeTest {
    
    public static void main(String[] args){
     // ********* part B   ***********
    ArrayList<Employee> projectGroup = new ArrayList<>();

        Employee e1 = new Employee("Joe Bloggs", "jb@gmail.com");
        Employee e2 = new Employee("Ann Banana", "ab@gmail.com");
        Employee e3 = new Employee("Tom Thumb", "tt@gmail.com");
        projectGroup.add(e1);
        projectGroup.add(e2);
        projectGroup.add(e3);
       
       for(int i = 0; i<projectGroup.size(); i++){
           System.out.println(projectGroup.get(i).getNextEmpNum());   
       }
       // ********* part C   ***********
       for(int i = 0; i<projectGroup.size(); i++){
           System.out.println(projectGroup.get(i).getName());   
       }
       
    }
    
}
