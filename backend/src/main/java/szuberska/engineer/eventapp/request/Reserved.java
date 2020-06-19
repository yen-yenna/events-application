package szuberska.engineer.eventapp.request;

public class Reserved {
    private String isOccupied;

    public String getIsOccupied() {
        return isOccupied;
    }

    public void setIsOccupied(String isOccupied) {
        this.isOccupied = isOccupied;
    }

    @Override
    public String toString() {
        return "Reserved{" +
                "isOccupied='" + isOccupied + '\'' +
                '}';
    }
}
