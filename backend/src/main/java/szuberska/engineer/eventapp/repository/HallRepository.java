package szuberska.engineer.eventapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import szuberska.engineer.eventapp.model.Hall;

@Repository
public interface HallRepository extends JpaRepository<Hall,Long> {

}
