package szuberska.engineer.eventapp.register.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.register.model.User;
import szuberska.engineer.eventapp.register.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }


    public User getUser(String userName){
       // System.out.println(userName);
        return userRepository.findByUserName(userName);
    }

    public ResponseEntity<User> updateUser(String username, User user) {
       User user1 = userRepository.findByUserName(username);
        //( () -> new ResourceNotFoundException("Event with following id not found: " + userId));
        //User user1 = new User();
        user1.setUserName(user.getUserName());
        user1.setEmail(user.getEmail());
        user1.setFirstName(user.getFirstName());
        user1.setSurname(user.getSurname());
        final User newUser = userRepository.save(user1);
        return ResponseEntity.ok().body(newUser);
    }
    public ResponseEntity updatePassword(String username, String password) {
        User user = userRepository.findByUserName(username);
        System.out.println(password);
        String password1 = password.replaceAll("\"|]|\\[","");
        String [] passwordAr = password1.split(",",2);
        String newPasswordOls = passwordAr[0];
        System.out.println(newPasswordOls);
        String newPasswordNew = passwordAr[1];
        System.out.println(newPasswordNew);
        passwordEncoder.matches(newPasswordOls, user.getPassword());
        user.setPassword(passwordEncoder.encode(newPasswordNew));
        final User newUser = userRepository.save(user);
        return ResponseEntity.ok().body(newUser);
    }


}
