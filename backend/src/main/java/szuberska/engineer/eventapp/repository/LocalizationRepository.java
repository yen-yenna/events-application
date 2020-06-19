package szuberska.engineer.eventapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import szuberska.engineer.eventapp.model.Localization;

@Repository
public interface LocalizationRepository extends JpaRepository<Localization,Long> {
    Localization findByLocalizationId (Long localizationId);
}
