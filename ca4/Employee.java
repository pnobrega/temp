/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ca4;

/**
 *
 * @author Paulo
 */
// ********* Question A   ***********
public class Employee {
    private String name;
    private String email;
    private static int empNum;
    public static int nextEmpNum = 1;
    
    public Employee() {
        name = "Paulo Nobrega";
        email = "nobregaxp@gmail.com";
    }

    public Employee(String name, String email) {
        this.name = name;
        this.email = email;
    }
    public int SetEmpNum() { 
            empNum = nextEmpNum++;
            return empNum;
        } 
    
    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public int getEmpNum() {
        return empNum;
    }

    public static int getNextEmpNum() {
        return empNum=++empNum;
    }

    @Override
    public String toString() {
        return "Employee{" + "name=" + name + ", email=" + email + ", empNum=" + empNum + ", nextEmpNum=" + nextEmpNum + '}';
    }
    
    

    
    

    

    
    
    
    
    
    
}
