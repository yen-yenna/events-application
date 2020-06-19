package szuberska.engineer.eventapp.register.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import szuberska.engineer.eventapp.register.model.LoginForm;
import szuberska.engineer.eventapp.register.model.User;
import szuberska.engineer.eventapp.register.repository.UserRepository;

@Service
public class RegisterService {

    @Autowired
    private UserRepository userRepository;



    @Autowired
    private PasswordEncoder encoder;

    public ResponseEntity<?> register(User user) {
        if (userRepository.existsByUserName(user.getUserName())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        User user1 = new User();

        user1.setEmail(user.getEmail());
        user1.setFirstName(user.getFirstName());
        user1.setPassword(encoder.encode(user.getPassword()));
        user1.setUserName(user.getUserName());
        user1.setSurname(user.getSurname());
        user1.setRole(user.getRole());
        userRepository.save(user1);
        return ResponseEntity.ok().body(user1);
    }

    public ResponseEntity<?> login(LoginForm loginForm) {

        if(!userRepository.existsByUserName(loginForm.getUsername())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        User user = userRepository.findByUserName(loginForm.getUsername());
        if(encoder.matches(loginForm.getPassword(), user.getPassword())){
            return ResponseEntity.ok().body(user);
        }
        else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
