package szuberska.engineer.eventapp.register.model;

public class LoginForm {

    private String userName;
    private String password;

    public LoginForm(String userName, String password){
        this.userName = userName;
        this.password = password;
    }

    public String getUsername() {
        return userName;
    }

    public void setUsername(String username) {
        this.userName = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
