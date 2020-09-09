/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ie.cct.algorithmsandconstructs.s2020099;

import ie.cct.algorithmsandconstructs.enums.Month;
import ie.cct.algorithmsandconstructs.interfaces.HotelInterface;
import ie.cct.algorithmsandconstructs.interfaces.HotelManagementSystemInterface;

/**
 *
 * @author Paulo
 */
public class HotelManagementSystem implements HotelManagementSystemInterface{

    public String calendar;
    @Override
    public String getCalendar(Month month, HotelInterface hotel){
        return null;
    }

    @Override
    public HotelInterface setupHotel() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
