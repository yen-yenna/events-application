package szuberska.engineer.eventapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import szuberska.engineer.eventapp.model.EventType;

@Repository
public interface EventTypeRepository extends JpaRepository<EventType,Long> {
    //EventType findEventTypeByType (String type);


}
