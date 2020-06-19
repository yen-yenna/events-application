package szuberska.engineer.eventapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.Event;
import szuberska.engineer.eventapp.request.EventRequest;
import szuberska.engineer.eventapp.services.EventService;

import javax.validation.Valid;

import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class EventController {

    @Autowired
    private EventService eventService;

    private Sort sortByDateAsc() {
        return new Sort(Sort.Direction.ASC, "eventDate");
    }

    @GetMapping("/events")
    public List<Event> getAllEvents(){

        return eventService.getAllEvents();
    }

    @GetMapping("/search/{word}")
    public List<Event> getEventsContaining(@PathVariable (value = "word") String word){
        return eventService.getEventsContaining(word);
    }

    @GetMapping("/events/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable(value = "id") Long eventId) throws ResourceNotFoundException {
        return eventService.getEventById(eventId);
    }

    @PostMapping("/events")
    public Event createEvent(@Valid @RequestBody EventRequest event) throws ResourceNotFoundException{
        System.out.println(event);
        return eventService.createEvent(event);
    }

    @PutMapping("/events/{id}")
    public ResponseEntity<Event> updateEvents(@PathVariable(value = "id") Long eventId, @Valid @RequestBody EventRequest event) throws  ResourceNotFoundException{
        return eventService.updateEvents(eventId,event);
    }
    @DeleteMapping("/events/{id}")
    public Map<String,Boolean> deleteEvent(@PathVariable(value = "id") Long eventId) throws ResourceNotFoundException{
        return eventService.deleteEvent(eventId);
    }

    @GetMapping("events/eventType/{id}")
    public List<Event> findByEventTypeId(@PathVariable (value = "id")Long eventTypeId) throws ResourceNotFoundException{
        return eventService.findByEventTypeId(eventTypeId);
    }

}
