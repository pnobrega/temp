// Java Program to find Area of Rectangle using Functions
package hw;

import java.util.Scanner;

public class Rectangle {
            
	public static void main(String[] args) {
		double width, height; 
                
                
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter length.....: ");
		width = sc.nextDouble();
		System.out.print("Enter width......: ");
		height = sc.nextDouble();

		areaRectangle(width, height);
                
                System.out.print("Continue? (y/n)..: ");
                String cont = sc.next();
                
                switch(cont = "y"){
                    case "y":
                        System.out.print("Enter length.....: ");
                        width = sc.nextDouble();
                        System.out.print("Enter width......: ");
                        height = sc.nextDouble();
                        areaRectangle(width, height); 
                   case "Y":
                        System.out.print("Enter length.....: ");
                        width = sc.nextDouble();
                        System.out.print("Enter width......: ");
                        height = sc.nextDouble();
                        areaRectangle(width, height); 
                   case "n":
                       break;
                   default:
                       break;
                }
                    
                
	}
	
	public static void areaRectangle( double width, double height ) {
		double Area, Perimeter; 
		
		Area = width * height;
		Perimeter = 2 * (width + height);

		System.out.format("Area..........: %.2f\n", Area);
		System.out.format("Perimeter.....: %.2f\n", Perimeter);
                
                    
                }
	}