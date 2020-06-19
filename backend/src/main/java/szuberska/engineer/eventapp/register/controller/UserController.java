package szuberska.engineer.eventapp.register.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sun.security.util.Password;
import szuberska.engineer.eventapp.ResourceNotFoundException;
import szuberska.engineer.eventapp.register.model.User;
import szuberska.engineer.eventapp.register.repository.UserRepository;
import szuberska.engineer.eventapp.register.service.UserService;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService userService;



    @GetMapping(value = "/users/{userName}")
    public User getUser(@PathVariable("userName") String userName){
        return userService.getUser(userName);
    }
    @PutMapping("/users/profile/{userName}")
    public ResponseEntity<User> updateUser(@PathVariable (value = "userName") String userName, @Valid @RequestBody User user) throws ResourceNotFoundException {
        System.out.println(user.getUserName());
        return userService.updateUser(userName,user);
    }
    @PutMapping("users/profile/password/{userName}")
    public ResponseEntity updatePassword(@PathVariable (value = "userName") String userName, @Valid @RequestBody String password) throws  ResourceNotFoundException{
        //System.out.println(passwordOld);
        //return userService.updatePassword(userName, passwordOld, passwordNew);
        return userService.updatePassword(userName,password);
    }
}
