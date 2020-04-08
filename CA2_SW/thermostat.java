
package ca2paulonobrega;

import java.util.Scanner;

public class thermostat {
    
    public static void main(String[] args) {
        int input = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Type 0 to close, 1 to warmer or 2 to cooler");
        input = sc.nextInt();
                
       switch (input) {
            case 0: 
                System.out.println("System has finished");
                break;
                
            case 1: 
                Heater w = new Heater();
                
                while (input ==1){ 
                    int setTemperature = w.warmer();
                    System.out.println("The actual temperature is: " + w.getTemperature());
                    System.out.print("Type 0 to close or 1 to warmer: ");
                    input = sc.nextInt();
                }
                break;
            
            case 2:             
                Heater c = new Heater();
                                       
                while (input ==2){ 
                    int setTemperature = c.cooler();
                    System.out.println("The actual temperature is: " + c.getTemperature());
                    System.out.println("Type 0 to close or 2 to cooler: ");
                    input = sc.nextInt();
                }
                break;
            }
    }
}
            
        
        

