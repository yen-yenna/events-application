package szuberska.engineer.eventapp.model;

import org.hibernate.search.annotations.ContainedIn;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="event_type")
public class EventType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long eventTypeId;
    @Column(name = "type")
    private String type;

    @Column(name = "seats_number")
    private int seatNo;

    @Column(name = "number_of_columns")
    private int noOfColumns;

    @Column(name = "number_of_seats_in_row")
    private int seatsInARow;

    @OneToMany (mappedBy = "eventType", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    //@ContainedIn
    private List<Event> events;

    public EventType(){}
    public EventType(String type){
        this.type=type;
    }


    public Long getEventTypeId() {
        return eventTypeId;
    }

    public void setEventTypeId(Long eventTypeId) {
        this.eventTypeId = eventTypeId;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getSeatNo() {
        return seatNo;
    }

    public void setSeatNo(int seatNo) {
        this.seatNo = seatNo;
    }

    public int getNoOfColumns() {
        return noOfColumns;
    }

    public void setNoOfColumns(int noOfColumns) {
        this.noOfColumns = noOfColumns;
    }

    public int getSeatsInARow() {
        return seatsInARow;
    }

    public void setSeatsInARow(int seatsInARow) {
        this.seatsInARow = seatsInARow;
    }

    @Override
    public String toString() {
        return "EventType{" +
                "eventTypeId=" + eventTypeId +
                ", type='" + type + '\'' +
                ", seatNo=" + seatNo +
                ", noOfColumns=" + noOfColumns +
                ", seatsInARow=" + seatsInARow +
                '}';
    }
}
