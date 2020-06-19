package szuberska.engineer.eventapp.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column (name = "ticket_id")
    private Long ticketId;

    @Column(name = "event_id")
    private Long eventId;

    @Column (name = "username")
    private String userName;

    //@Type(type = "date")
    @Column(name = "date_of_purchase")
    private LocalDate buyDate;

   // @Column (name = "seat_number")
    //private int seatNo;
  // @Column(name = "chosen_column")
   //private int noOfColumn;

    @Column(name = "chosen_seat")
    private String seatInARow;


    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(Long ticketId) {
        this.ticketId = ticketId;
    }

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public LocalDate getBuyDate() {
        return buyDate;
    }

    public void setBuyDate(LocalDate buyDate) {
        this.buyDate = buyDate;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

   /* public int getNoOfColumn() {
        return noOfColumn;
    }

    public void setNoOfColumn(int noOfColumn) {
        this.noOfColumn = noOfColumn;
    }
*/
    public String getSeatInARow() {
        return seatInARow;
    }

    public void setSeatInARow(String seatInARow) {
        this.seatInARow = seatInARow;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "ticketId=" + ticketId +
                ", eventId=" + eventId +
                ", userName='" + userName + '\'' +
                ", buyDate=" + buyDate +
                ", seatInARow='" + seatInARow + '\'' +
                '}';
    }
}
