package szuberska.engineer.eventapp.register.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.Event;
import szuberska.engineer.eventapp.model.Ticket;
import szuberska.engineer.eventapp.register.model.User;
import szuberska.engineer.eventapp.register.repository.UserRepository;
import szuberska.engineer.eventapp.repository.TicketRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminService {
    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public ResponseEntity<User> updateUserAdmin(String username, User user) {
        User user1 = userRepository.findByUserName(username);
        user1.setPassword(passwordEncoder.encode(user.getPassword()));
        user1.setRole(user.getRole());
        final User newUser = userRepository.save(user1);
        return ResponseEntity.ok().body(newUser);
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Map<String, Boolean> deleteUser(String userName) throws ResourceNotFoundException {
        User user = userRepository.findByUserName(userName);
                //.orElseThrow(() -> new ResourceNotFoundException("Event with the following id not found: " + userId));
        if (!user.getRole().equals("admin")) {
            userRepository.delete(user);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return response;
        } else {
            Map<String, Boolean> response = new HashMap<>();
            response.put("can't delete", Boolean.FALSE);
            return response;
        }
    }
}
