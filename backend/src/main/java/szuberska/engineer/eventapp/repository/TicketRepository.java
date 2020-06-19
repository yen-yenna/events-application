package szuberska.engineer.eventapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import szuberska.engineer.eventapp.model.Ticket;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long>{

    List<Ticket> findByUserName (String userName);
    boolean existsByEventIdAndSeatInARowIsContaining(Long eventId, String seatInARow);
    List<Ticket> findByEventId (Long eventId);
}
