package szuberska.engineer.eventapp.register.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.model.Ticket;
import szuberska.engineer.eventapp.register.model.User;
import szuberska.engineer.eventapp.register.repository.UserRepository;
import szuberska.engineer.eventapp.register.service.AdminService;

import javax.persistence.Column;
import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/admin/users")
    List<User> getAllUsers(){ return adminService.getAllUsers(); }

    @PutMapping("/admin/users/profile/{userName}")
    public ResponseEntity<User> updateUserAdmin(@PathVariable (value = "userName") String userName, @Valid @RequestBody User user) throws ResourceNotFoundException {
        System.out.println(user.getUserName());
        return adminService.updateUserAdmin(userName,user);
    }

    @GetMapping("/admin/tickets")
    List<Ticket> getAllTickets(){ return adminService.getAllTickets(); }

    @DeleteMapping("/admin/user/{userName}")
    public Map<String,Boolean> deleteEvent(@PathVariable(value = "userName") String userName) throws ResourceNotFoundException{
        return adminService.deleteUser(userName);
    }
}
