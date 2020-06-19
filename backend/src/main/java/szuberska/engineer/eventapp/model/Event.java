package szuberska.engineer.eventapp.model;
import org.hibernate.search.annotations.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "event")
//@Indexed
public class Event {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column (name = "event_id")
    private long eventId;

    @Column(name = "city")
    //@Field
    private String city;

    @Column(name = "description")
    //@Field(termVector = TermVector.YES)
    //@Field(index = Index.YES, analyze= Analyze.NO, store= Store.NO)
    private String description;

    //@Type (type = "date")
    @Column(name = "event_date")
   // @Field
    @DateBridge(resolution = Resolution.DAY)
    private LocalDate eventDate;

    @Column (name = "event_time")
    private LocalTime time;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "type_id")
    //@IndexedEmbedded(depth=1)
   private EventType eventType;
   // private Long eventTypeId;

   // @Column(name = "number_of_tickets")
    //private int noOfTickets;

    @Column(name = "ticket_price")
    //@Field
    private Double ticketPrice;

    @Lob
    @Column(name = "event_description", length=512)
    //@Field
    private String longerDescription;

    @Lob
    @Column(name = "link", length = 354)
    private String link;



    @Column(name = "hall_id")
    private Long hallId;



    public Event() {
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Event(String description, String city, LocalDate date, LocalTime time, EventType eventType, Double ticketPrice,
                 String longerDescription, String link, Long hallId) {
        this.description = description;
        this.city = city;
        this.eventDate = date;
        this.time = time;
        //this.eventTypeId = eventTypeId;
        this.eventType=eventType;
        this.ticketPrice = ticketPrice;
        this.longerDescription = longerDescription;
        this.link = link;
        this.hallId = hallId;
    }

    public long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

   /* public int getNoOfTickets() {
        return noOfTickets;
    }

    public void setNoOfTickets(int noOfTickets) {
        this.noOfTickets = noOfTickets;
    } */

    public void setEventDate(LocalDate eventDate) {
        this.eventDate = eventDate;
    }

    public LocalDate getEventDate() {
        return eventDate;
    }

    public Double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(Double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public EventType getEventType() {
        return eventType;
    }

    public void setEventType(EventType eventType) {
        this.eventType = eventType;
    }

    public String getLongerDescription() {
        return longerDescription;
    }

    public void setLongerDescription(String longerDescription) {
        this.longerDescription = longerDescription;
    }

    public void setEventId(long eventId) {
        this.eventId = eventId;
    }

    public Long getHallId() {
        return hallId;
    }

    public void setHallId(Long hallId) {
        this.hallId = hallId;
    }

    @Override
    public String toString() {
        return "Event{" +
                "eventId=" + eventId +
                ", city='" + city + '\'' +
                ", description='" + description + '\'' +
                ", eventDate=" + eventDate +
                ", time=" + time +
                ", eventType=" + eventType +
                ", ticketPrice=" + ticketPrice +
                ", longerDescription='" + longerDescription + '\'' +
                ", link='" + link + '\'' +
                ", hallId=" + hallId +
                '}';
    }
}
