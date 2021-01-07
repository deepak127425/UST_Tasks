package com.ust.flightreservation.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.flightreservation.dto.ReservationRequest;
import com.ust.flightreservation.entities.Flight;
import com.ust.flightreservation.entities.Passenger;
import com.ust.flightreservation.entities.Reservation;
import com.ust.flightreservation.repos.FlightRepository;
import com.ust.flightreservation.repos.PassengerRepository;
import com.ust.flightreservation.repos.ReservationRepository;
import com.ust.flightreservation.util.Emailutil;
import com.ust.flightreservation.util.pdfgenerator;

@Service
public class ReservationServiceImpl implements ReservationService {
	
	@Autowired
	FlightRepository flightRepository;
	
	@Autowired
	PassengerRepository passengerRepository;
	
	@Autowired
	ReservationRepository reservationRepository;
	
	@Autowired
	pdfgenerator pdfGenerator;
	
	@Autowired
	Emailutil emailUtil;

	@Override
	public Reservation bookFlight(ReservationRequest request) {
		// TODO Auto-generated method stub
		
		//Make Payment
		
		//Get Flight Info
		Long flightId = request.getFlightId();
		Flight flight = flightRepository.findById(flightId).get();
		
		//Create the passenger in db
		Passenger passenger = new Passenger();
		passenger.setFirstName(request.getPassengerFirstName());
		passenger.setLastName(request.getPassengerLastName());
		passenger.setPhone(request.getPassengerPhone());
		passenger.setEmail(request.getPassengerEmail());
		
		Passenger savedPassenger = passengerRepository.save(passenger);
		
		Reservation reservation = new Reservation();
		reservation.setFlight(flight);
		reservation.setPassenger(savedPassenger);
		reservation.setCheckedIn(false);
		
		Reservation savedReservation = reservationRepository.save(reservation);
		
		String filePath = "C:/Users/Deepu/Desktop/UST/spring boot/pdf" + savedReservation.getId()+ ".pdf";
		
		pdfGenerator.generateItinerary(savedReservation, filePath);
		emailUtil.sendItinerary(passenger.getEmail(),filePath);
		
		return savedReservation;
	}

}
