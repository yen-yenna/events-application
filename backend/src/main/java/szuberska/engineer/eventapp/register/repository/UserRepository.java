package szuberska.engineer.eventapp.register.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import szuberska.engineer.eventapp.register.model.User;


@Repository
public interface UserRepository extends JpaRepository <User, Long> {
    User findByUserName(String username);
    Boolean existsByUserName(String username);
}
