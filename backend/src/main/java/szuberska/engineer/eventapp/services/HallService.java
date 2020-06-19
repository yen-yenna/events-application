package szuberska.engineer.eventapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.Hall;
import szuberska.engineer.eventapp.repository.HallRepository;

@Service
public class HallService {

    @Autowired
    private HallRepository hallRepository;

    public Hall getHallById (Long hallId) throws ResourceNotFoundException {
        return this.hallRepository.findById(hallId).orElseThrow(() -> new ResourceNotFoundException("Event not found: " + hallId));
    }
}
