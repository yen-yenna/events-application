package szuberska.engineer.eventapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import szuberska.engineer.eventapp.model.Localization;
import szuberska.engineer.eventapp.repository.LocalizationRepository;

import java.awt.*;
import java.util.List;

@Service
public class LocalizaionService {

    @Autowired
    private LocalizationRepository localizationRepository;

    public Localization getLocalizationById(Long localizationId) {
        return this.localizationRepository.findByLocalizationId(localizationId);
    }
    public List<Localization> getAll() {
        return this.localizationRepository.findAll();
    }
}
