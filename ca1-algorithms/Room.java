package ie.cct.algorithmsandconstructs.s2020099;

import java.util.HashMap;
import java.util.Map;

import ie.cct.algorithmsandconstructs.enums.Month;
import ie.cct.algorithmsandconstructs.enums.RoomType;
import ie.cct.algorithmsandconstructs.interfaces.RoomInterface;



public class Room implements RoomInterface {
	
	private RoomType type;
	private double rate;
	private Map<Month, boolean[]> availability;
	private int id;
	private static int counter;
	
	public Room(RoomType type, double rate) {
		this.type = type;
		this.rate = rate;
		this.id = counter++;
		this.availability = createAvailability();
		
		
		
	}
	
	private Map<Month, boolean[]> createAvailability(){
		
		availability = new HashMap<Month, boolean[]>();
		
		Month[] months = Month.values();
		
		for (Month m : months) {
			boolean[] days = new boolean[m.getNumberOfDays()];
			
			for (int i = 0; i < days.length; i++) {
				days[i] = true;
			}
			
			availability.put(m, days);
			
		}
		
		return availability;
	}
	

	@Override
	public RoomType getType() {
		// TODO Auto-generated method stub
		return type;
	}

	@Override
	public void setType(RoomType type) {
		// TODO Auto-generated method stub
		this.type = type;
	}

	@Override
	public double getRate() {
		// TODO Auto-generated method stub
		return rate;
	}

	@Override
	public void setRate(double rate) {
		// TODO Auto-generated method stub
		this.rate = rate;
	}

	@Override
	public Map<Month, boolean[]> getAvailability() {
		// TODO Auto-generated method stub
		return availability;
	}

	@Override
	public void setAvailability(Map<Month, boolean[]> availability) {
		// TODO Auto-generated method stub
		this.availability = availability;
	}

	@Override
	public int getId() {
		// TODO Auto-generated method stub
		return id;
	}

	@Override
	public boolean isAvailable(Month month, int day) {
		// TODO Auto-generated method stub
		boolean[] days = availability.get(month);
		boolean available = days[day - 1];
		return available;
	}

	@Override
	public boolean book(Month month, int day) {
		// TODO Auto-generated method stub
		boolean available = isAvailable(month, day);
		
		if(available) {
			
			availability.get(month)[day - 1] = false;
			return true;
		}
		else {
			return false;
		}
		
	}

}
