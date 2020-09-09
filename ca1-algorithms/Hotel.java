package ie.cct.algorithmsandconstructs.s2020099;

import ie.cct.algorithmsandconstructs.enums.Month;
import ie.cct.algorithmsandconstructs.enums.RoomType;
import ie.cct.algorithmsandconstructs.interfaces.HotelInterface;
import ie.cct.algorithmsandconstructs.interfaces.RoomInterface;
import java.util.List;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Paulo
 */
public class Hotel implements HotelInterface{
    
    private List<RoomInterface> rooms;
    public String name;
    public int countRoom;
    private int id;

    @Override
    public List<RoomInterface> getRooms() {
        return rooms;
    }

    @Override
    public void setRooms(List<RoomInterface> rooms) {
        this.rooms = rooms;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean checkAvailability(Month month, int day, RoomType type, int lengthOfStay) {
        
        for(int i = 0; i < rooms.size(); i++){
            if(rooms.get(i).getType().equals(type)){
                rooms.get(i).isAvailable(month, day);
                id++;
            countRoom ++;
            }
        }
        return false;
    }

    @Override
    public int getRoomAvailable(Month month, int day, RoomType type, int lengthOfStay) {
        
        if(countRoom >= 1){
            return id;
        }        
        return 0;
        
    }

    @Override
    public int getNumberOfRooms() {        
        if(countRoom >= 1){
            return (countRoom);
        }            
        return 0;
    }

    @Override
    public boolean bookRoom(Month month, int day, RoomType type, int lengthOfStay) {
        return false;
    }
    
}
