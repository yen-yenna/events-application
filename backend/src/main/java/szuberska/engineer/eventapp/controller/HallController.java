package szuberska.engineer.eventapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.Hall;
import szuberska.engineer.eventapp.services.HallService;

import javax.persistence.Lob;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class HallController {

    @Autowired
    private HallService hallService;

    @GetMapping("/halls/{hallId}")
    public Hall getHallById (@PathVariable (value = "hallId") Long hallId) throws ResourceNotFoundException {
        return this.hallService.getHallById(hallId);
    }
}
