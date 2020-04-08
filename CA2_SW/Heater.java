package ca2paulonobrega;

public class Heater {
    
    private int temperature = 15;
    
    private static final int MAX_TEMP = 40;
    private static final int MIN_TEMP = 5;

    public int Heater() {
        return  temperature;       
    }

    public int getTemperature() {
        return temperature;
    }

    public int cooler(){
        switch (temperature) {
            case MIN_TEMP:
                System.out.println("Min temp 5 degrees");
                break;
            default:
                return temperature -=5;
        }
        return 0;
    }
    public int warmer(){
        switch (temperature) {
            case MAX_TEMP:
                System.out.println("Max temp 40 degrees");
                break;
            default:
                return temperature +=5;
        }
        return 0;
    }
    }

