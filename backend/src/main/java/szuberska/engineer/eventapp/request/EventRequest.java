package szuberska.engineer.eventapp.request;

import java.time.LocalDate;
import java.time.LocalTime;

public class EventRequest {

    private String city;
    private String description;
    private LocalDate eventDate;
    private LocalTime time;
    private Long eventTypeId;
    private Double ticketPrice;
    private String longerDescription;
    private String link;
    private Long hallId;

    public EventRequest(String city, String description, LocalDate eventDate, LocalTime time, Long eventTypeId,
                        Double ticketPrice, String longerDescription, String link, Long hallId) {
        this.city = city;
        this.description = description;
        this.eventDate = eventDate;
        this.time = time;
        this.eventTypeId = eventTypeId;
        this.ticketPrice = ticketPrice;
        this.longerDescription = longerDescription;
        this.link = link;
        this.hallId = hallId;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public Long getEventTypeId() {
        return eventTypeId;
    }

    public void setEventTypeId(Long eventTypeId) {
        this.eventTypeId = eventTypeId;
    }

    public Double getTicketPrice() {
        return ticketPrice;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public void setTicketPrice(Double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public String getLongerDescription() {
        return longerDescription;
    }

    public void setLongerDescription(String longerDescription) {
        this.longerDescription = longerDescription;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Long getHallId() {
        return hallId;
    }

    public void setHallId(Long hallId) {
        this.hallId = hallId;
    }
}
