package szuberska.engineer.eventapp.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.EventType;
import szuberska.engineer.eventapp.repository.EventTypeRepository;
import szuberska.engineer.eventapp.services.EventTypeService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class EventTypeController  {

    @Autowired
    private EventTypeService eventTypeService;

    @GetMapping("/eventType")
    public List<EventType> getAllTypes(){
        return eventTypeService.getAllTypes();
    }

    @GetMapping("/eventType/{id}")
    public ResponseEntity<EventType> getEventTypeById(@PathVariable(value = "id")Long eventTypeId) throws ResourceNotFoundException{
        EventType eventType = eventTypeService.getEventTypeById(eventTypeId);
        return ResponseEntity.ok().body(eventType);
    }
    @PostMapping("/eventType")
    public EventType createEventType (@Valid @RequestBody EventType type){

        return eventTypeService.createEventType(type);
    }

    @PutMapping("/eventType/{id}")
    public ResponseEntity<EventType> updateEventType (@PathVariable (value = "id") Long eventTypeId,
                                                      @Valid @RequestBody EventType eventType) throws ResourceNotFoundException{
       return eventTypeService.updateEventType(eventTypeId,eventType);
    }
    @DeleteMapping("/eventType/{id}")
    public Map<String,Boolean> deleteEventType(@PathVariable (value = "id") Long eventTypeId) throws ResourceNotFoundException{
        return eventTypeService.deleteEventType(eventTypeId);
    }

}
