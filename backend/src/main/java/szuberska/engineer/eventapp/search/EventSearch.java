package szuberska.engineer.eventapp.search;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

//@Repository
//@Transactional
public class EventSearch {

    @PersistenceContext
    private EntityManager entityManager;


}
