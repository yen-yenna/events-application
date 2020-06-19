package szuberska.engineer.eventapp.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "hall")
public class Hall {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long hallId;


    @Column(name = "name")
    private String name;

    @Column(name = "seats")
    private int seatNo;

    @Column(name = "seats_columns")
    private int columns;

    @Column(name = "seats_rows")
    private int rows;

    @Column(name = "localization_id")
    private Long localizationId;



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSeatNo() {
        return seatNo;
    }

    public void setSeatNo(int seatNo) {
        this.seatNo = seatNo;
    }

    public int getColumns() {
        return columns;
    }

    public void setColumns(int columns) {
        this.columns = columns;
    }

    public int getRows() {
        return rows;
    }

    public void setRows(int rows) {
        this.rows = rows;
    }

    public Long getLocalizationId() {
        return localizationId;
    }

    public void setLocalizationId(Long localizationId) {
        this.localizationId = localizationId;
    }

    @Override
    public String toString() {
        return "Hall{" +
                "hallId=" + hallId +
                ", name='" + name + '\'' +
                ", seatNo=" + seatNo +
                ", columns=" + columns +
                ", rows=" + rows +
                '}';
    }
}
