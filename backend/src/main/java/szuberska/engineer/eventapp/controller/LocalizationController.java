package szuberska.engineer.eventapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.Localization;
import szuberska.engineer.eventapp.services.LocalizaionService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class LocalizationController {

    @Autowired
    private LocalizaionService localizaionService;

    @GetMapping("/localizations")
    public List<Localization> getAllLocalizations() {
        return this.localizaionService.getAll();
    }

    @GetMapping("/localizations/{id}")
    public Localization getLocalizationById (@PathVariable (value = "id") Long id) throws ResourceNotFoundException {
        return this.localizaionService.getLocalizationById(id);
    }
}
