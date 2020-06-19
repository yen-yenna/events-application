package szuberska.engineer.eventapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.Ticket;
import szuberska.engineer.eventapp.request.Reserved;
import szuberska.engineer.eventapp.services.TicketService;

import javax.validation.Valid;
import java.util.List;
import java.util.Stack;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @GetMapping("/tickets/user/{userName}")
    public List<Ticket> findByUserName (@PathVariable (value = "userName") String userName) throws ResourceNotFoundException{
        return ticketService.findByUserName(userName);

    }

    @PostMapping("/tickets")
    public ResponseEntity<?> createTicket(@Valid @RequestBody Ticket ticket){
     return ticketService.createTicket(ticket);

    }

    @GetMapping ("/tickets/ticket/{id}")
    public Ticket getTicketById (@PathVariable (value = "id") Long ticketId) throws ResourceNotFoundException {
        return ticketService.getTicketById(ticketId);
    }

    @GetMapping("/tickets/{eventId}/{seatNo}")
        public Reserved isSeatOccupied (@PathVariable(value = "eventId") Long eventId,
                                        @PathVariable(value = "seatNo") String seatNo) {

        return ticketService.isSeatOccupied(eventId,seatNo);

    }
    @GetMapping("/tickets/{eventId}")
    public List<Ticket> getTicketsByEventId(@PathVariable(value = "eventId") Long eventId) {
        return ticketService.getTicketsByEventId(eventId);
    }
    @GetMapping("/tickets/reserved/{eventId}")
    public String getReserved(@PathVariable (value = "eventId") Long eventId) {
        return ticketService.getReserved(eventId);
    }

}
