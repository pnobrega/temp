package ca2paulonobrega;

public class Heater {
    
    private int temperature = 15; // inicial temperature
    
    private static final int MAX_TEMP = 40; // max temperature
    private static final int MIN_TEMP = 5; // min temperature

    public int Heater() {
        return  temperature;       
    }

    public int getTemperature() {
        return temperature;
    }
    // there are no set method, the method cooler and warmer will set the degree

    public int cooler(){
        switch (temperature) {
            case MIN_TEMP:
                System.out.println("Min temp 5 degrees");
                break;
            default:
                return temperature -=5; // cooler method to decrease by 5 degree
        }
        return 0;
    }
    public int warmer(){
        switch (temperature) {
            case MAX_TEMP:
                System.out.println("Max temp 40 degrees");
                break;
            default:
                return temperature +=5; // warmer method to increase by 5 degree
        }
        return 0;
    }
    @Override
    public String toString() {
        return "Temperature: " + temperature;
    }
    }

