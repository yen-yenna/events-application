package szuberska.engineer.eventapp.payment;

import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class PaymentController {

    private PaymentService paymentService;

    @Autowired
    PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping("/charge/{token}/{amount}")
    public Charge chargeCard(@PathVariable(value = "token") String token, @PathVariable(value = "amount") Long amount) throws Exception{

           // (HttpServletRequest request) throws Exception {
//        System.out.println("Token: " + request.getHeader("token"));
//        System.out.println("Amount: " + request.getHeader("amount"));
//        String token = request.getHeader("token");
//       Double amount = Double.parseDouble(request.getHeader("amount"));
        System.out.println("Token: " + token);
        System.out.println("Amount: " + amount);
        return this.paymentService.chargeCreditCard(token, amount);
    }
}
