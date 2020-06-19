package szuberska.engineer.eventapp.register.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import szuberska.engineer.eventapp.register.model.LoginForm;
import szuberska.engineer.eventapp.register.model.User;
import szuberska.engineer.eventapp.register.service.RegisterService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class RegisterController {

    @Autowired
    private RegisterService registerService;


    @PostMapping(value = "/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        return registerService.register(user);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginForm loginForm) {

        return registerService.login(loginForm);
    }

}
