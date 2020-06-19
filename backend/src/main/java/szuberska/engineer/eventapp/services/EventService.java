package szuberska.engineer.eventapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.Event;
import szuberska.engineer.eventapp.model.EventType;
import szuberska.engineer.eventapp.repository.EventRepository;
import szuberska.engineer.eventapp.repository.EventTypeRepository;
import szuberska.engineer.eventapp.request.EventRequest;

import java.time.LocalDate;
import java.util.*;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private EventTypeService eventTypeService;

    @Autowired
    private EventTypeRepository eventTypeRepository;

    private Sort sortByDateAsc() {
        return new Sort(Sort.Direction.ASC, "eventDate");
    }


    public List<Event> getAllEvents(){
        return eventRepository.findAllByEventDateIsGreaterThanEqualOrderByEventDate(LocalDate.now());
    }

    public List<Event> getEventsContaining(String word)
    {
        System.out.println(word);
        System.out.println(eventRepository.findByDescriptionContainingIgnoreCase(word));
        return eventRepository.findByDescriptionContainingIgnoreCase(word);}

    public ResponseEntity<Event> getEventById(Long eventId) throws ResourceNotFoundException {
        Event event = eventRepository.findById(eventId).orElseThrow( () -> new ResourceNotFoundException("Event not found: " + eventId));
        return ResponseEntity.ok().body(event);
    }


    public Event createEvent(EventRequest event) throws ResourceNotFoundException {
       Event event1 = new Event();
       //EventType eventType = eventTypeService.getEventTypeById(event.getEventType());
       event1.setCity(event.getCity());
       event1.setDescription(event.getDescription());
       event1.setEventDate(event.getEventDate());
       event1.setTime(event.getTime());
       event1.setEventType(eventTypeService.getEventTypeById(event.getEventTypeId()));
       event1.setLongerDescription(event.getLongerDescription());
      // event1.setNoOfTickets(eventType.getSeatNo());
       event1.setTicketPrice(event.getTicketPrice());
       event1.setLink(event.getLink());
       event1.setHallId(event.getHallId());
       return eventRepository.save(event1);
    }

    public ResponseEntity<Event> updateEvents(Long eventId,EventRequest event) throws  ResourceNotFoundException{
        Event eventNew = eventRepository.findById(eventId).orElseThrow( () -> new ResourceNotFoundException("Event with following id not found: " + eventId));
        eventNew.setCity(event.getCity());
        eventNew.setDescription(event.getDescription());
        eventNew.setEventDate(event.getEventDate());
        eventNew.setTime(event.getTime());
        eventNew.setEventType(eventTypeService.getEventTypeById(event.getEventTypeId()));
       // eventNew.setNoOfTickets(event.getNoOfTickets());
        eventNew.setTicketPrice(event.getTicketPrice());
        eventNew.setLink(event.getLink());
        final Event updatedEvent = eventRepository.save(eventNew);
        return ResponseEntity.ok().body(updatedEvent);
    }

    public Map<String,Boolean> deleteEvent( Long eventId) throws ResourceNotFoundException{
        Event event = eventRepository.findById(eventId).orElseThrow(() -> new ResourceNotFoundException("Event with the following id not found: " + eventId));
        eventRepository.delete(event);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return response;
    }

    public List<Event> findByEventTypeId(Long eventTypeId) {

        Optional<EventType> eventType = eventTypeRepository.findById(eventTypeId);
        List<Event> eventList = eventRepository.findByEventTypeAndEventDateIsGreaterThanEqualOrderByEventDateAsc(eventType, LocalDate.now());
        eventList.sort(Comparator.comparing(Event::getEventDate));
        return eventList;

        //List<Event> eventsOfThisType = eventRepository.findByEventTypeId(eventTypeId);
        //eventsOfThisType.sort((o1,o2) -> o1.getEventDate().compareTo(o2.getEventDate()));
        //return eventsOfThisType;
    }


}
