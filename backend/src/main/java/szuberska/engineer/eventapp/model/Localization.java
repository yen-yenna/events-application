package szuberska.engineer.eventapp.model;

import javax.persistence.*;

@Entity
@Table (name = "localization")
public class Localization {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column (name = "localization_id")
    private Long localizationId;

    private String street;

    @Column (name = "house_no")
    private int houseNo;

    private int postcode;

    private String city;



    public Long getLocalizationId() {
        return localizationId;
    }

    public void setLocalizationId(Long localizationId) {
        this.localizationId = localizationId;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getHouseNo() {
        return houseNo;
    }

    public void setHouseNo(int houseNo) {
        this.houseNo = houseNo;
    }

    public int getPostcode() {
        return postcode;
    }

    public void setPostcode(int postcode) {
        this.postcode = postcode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }



    @Override
    public String toString() {
        return "Localization{" +
                "localizationId=" + localizationId +
                ", street='" + street + '\'' +
                ", houseNo=" + houseNo +
                ", postcode=" + postcode +
                ", city='" + city + '\'' +
                '}';
    }
}
