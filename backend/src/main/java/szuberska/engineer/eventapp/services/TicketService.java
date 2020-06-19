package szuberska.engineer.eventapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.Ticket;
import szuberska.engineer.eventapp.repository.TicketRepository;
import szuberska.engineer.eventapp.request.Reserved;

import java.lang.reflect.Array;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Stack;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    public List<Ticket> findByUserName ( String userName) throws ResourceNotFoundException {
        return ticketRepository.findByUserName(userName);
    }

//nie można respose entity w service
    public ResponseEntity<?> createTicket(Ticket ticket){
        Ticket ticket1 = new Ticket();
        ticket1.setEventId(ticket.getEventId());
        ticket1.setUserName(ticket.getUserName());
        ticket1.setBuyDate(LocalDate.now());
        //ticket1.setNoOfColumn(ticket.getNoOfColumn());
        ticket1.setSeatInARow(ticket.getSeatInARow());
        if (ticketRepository.existsByEventIdAndSeatInARowIsContaining(ticket.getEventId(),ticket.getSeatInARow()))
        {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Already exists");
        }
        else {
            final Ticket finalTicket = ticketRepository.save(ticket1);
            return ResponseEntity.ok().body(finalTicket);
        }

        }

        public Ticket getTicketById(Long ticketId) throws ResourceNotFoundException {

        return this.ticketRepository.findById(ticketId).orElseThrow( ()
                -> new ResourceNotFoundException("Ticket not found: " + ticketId));
        }

    public List<Ticket> getTicketsByEventId(Long eventId){

        return ticketRepository.findByEventId(eventId);
    }

    public Reserved isSeatOccupied (Long eventId, String seatNo) {
        //getReserved(eventId);
        Reserved reserved = new Reserved();
        if(ticketRepository.existsByEventIdAndSeatInARowIsContaining(eventId, seatNo))
            reserved.setIsOccupied("TRUE");
        else reserved.setIsOccupied("FALSE");
        return reserved;


    }
    public String getReserved (Long eventId){
        //Stack<Integer> stack = new Stack<Integer>();
        int i=0;
        String s = null;
        //Set<Integer> seats = new HashSet<>();
        int[] arr = new int[100];
        List<Ticket> tickets = this.ticketRepository.findByEventId(eventId);
        while(i<tickets.size()) {
            s = String.join(",", tickets.get(i).getSeatInARow());
            //System.out.println(s);
           /* a[i] = Integer.parseInt(tickets.get(i).getSeatInARow().trim());
            while (i<tickets.get(i).getSeatInARow().length()){
                if(Character.isDigit(tickets.get))
            }

           String temp = tickets.get(i).getSeatInARow();
           temp = temp.replaceAll(" ","");
           String[] parts = temp.split(",");
           for (int j=0; j< parts.length; j++){
               stack.push(Integer.parseInt(parts[j]));
               System.out.println(Integer.parseInt((parts[j])));
           } */
            i++;

        }
       /* System.out.println("Stack size: "+ stack.size());
        int s =stack.size();
            for(int z=0; z< s; z++) {
                arr[z] = stack.pop();
                System.out.println(arr[z]);
            }
            System.out.println("Array length" + arr.length);
            for(int b=0; b<arr.length; b++)
            {System.out.println(arr[b]);} */
      // System.out.println(stack);
        //    return stack;
        //System.out.println(s);
        return s;
        }
    }




