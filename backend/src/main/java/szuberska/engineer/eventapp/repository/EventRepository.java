package szuberska.engineer.eventapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import szuberska.engineer.eventapp.model.Event;
import szuberska.engineer.eventapp.model.EventType;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends CrudRepository<Event,Long> {
    List<Event> findAllByEventDateIsGreaterThanEqualOrderByEventDate(LocalDate date);
    List<Event> findByEventTypeAndEventDateIsGreaterThanEqualOrderByEventDateAsc(Optional<EventType> eventType, LocalDate date);
    List<Event> findByDescriptionContainingIgnoreCase(String word);
    Event findByHallId(Long hallId);
 }
