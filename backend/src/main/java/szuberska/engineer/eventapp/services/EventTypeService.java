package szuberska.engineer.eventapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.EventType;
import szuberska.engineer.eventapp.repository.EventTypeRepository;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EventTypeService {

    @Autowired
    private EventTypeRepository eventTypeRepository;

    public List<EventType> getAllTypes(){
        return eventTypeRepository.findAll();
    }

    public EventType getEventTypeById(Long eventTypeId) throws ResourceNotFoundException {
        return eventTypeRepository.findById(eventTypeId).orElseThrow(
                () -> new ResourceNotFoundException("EventType not found by id:" + eventTypeId));
    }
    public EventType createEventType (EventType type){
        return eventTypeRepository.save(type);
    }

    public ResponseEntity<EventType> updateEventType (Long eventTypeId,EventType eventType) throws ResourceNotFoundException{
        EventType eventType1 = eventTypeRepository.findById(eventTypeId).orElseThrow( () ->
                new ResourceNotFoundException("EventType with following id not found: " + eventTypeId));
        eventType1.setType(eventType.getType());
        final EventType newEventType = eventTypeRepository.save(eventType1);
        return ResponseEntity.ok().body(newEventType);
    }
    public Map<String,Boolean> deleteEventType(Long eventTypeId) throws ResourceNotFoundException{
        EventType eventType = eventTypeRepository.findById(eventTypeId).orElseThrow( () ->
                new ResourceNotFoundException("Event with following id not found:" + eventTypeId));
        eventTypeRepository.delete(eventType);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
