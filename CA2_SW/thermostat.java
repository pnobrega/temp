
package ca2paulonobrega;

import java.util.Scanner;

public class thermostat {
    
    public static void main(String[] args) {
        int input;
        Scanner sc = new Scanner(System.in);
        System.out.println("The actual temperature is 15\u00B0 celsius.");
        System.out.print("Type 0 to close, 1 to warmer or 2 to cooler: ");
        input = sc.nextInt();
        Heater h = new Heater(); 
        
       switch (input) {
            case 0: // option to finish the program
                System.out.println("System has finished");
                break;
                
            case 1: // option to warmer
                Heater w = new Heater();
                
                while (input ==1){ 
                    int setTemperature = w.warmer();
                    System.out.println("The actual temperature is: " + w.getTemperature() + "\u00B0 celsius");
                    System.out.print("Type 0 to close or 1 to warmer: ");
                    input = sc.nextInt();
                }
                break;
                
            case 2: // option to cooler     
                Heater c = new Heater();
                                       
                while (input ==2){ 
                    int setTemperature = c.cooler();
                    System.out.println("The actual temperature is: " + c.getTemperature() + "\u00B0 celsius");
                    System.out.println("Type 0 to close or 2 to cooler: ");
                    input = sc.nextInt();
                }
                break;
        }
    }
}
            
        
        

