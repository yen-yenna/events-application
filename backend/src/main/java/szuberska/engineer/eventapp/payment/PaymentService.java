package szuberska.engineer.eventapp.payment;

import com.stripe.Stripe;
import com.stripe.exception.*;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import szuberska.engineer.eventapp.services.TicketService;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentService {
    // test code : pk_test_Iuq5jutrVpSCi9QH7LHCP0xz00rJDsDVoS
    // test secret code : sk_test_nR3mWk9944HfrG18IJoPFIGN00xrIRjFDN
   /* @Value("$sk_test_nR3mWk9944HfrG18IJoPFIGN00xrIRjFDN")
    private String secretKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = secretKey;
    }
    public Charge charge(PaymentRequest paymentRequest)
            throws AuthenticationException, InvalidRequestException,
            APIConnectionException, CardException, APIException {
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", paymentRequest.getAmount());
        chargeParams.put("description", paymentRequest.getDescription());
        chargeParams.put("source", paymentRequest.getStripeToken());
        return Charge.create(chargeParams);
    } */

    @Autowired
    PaymentService() {
        Stripe.apiKey = "sk_test_nR3mWk9944HfrG18IJoPFIGN00xrIRjFDN";
    }


    public Charge chargeCreditCard(String token, double amount) throws Exception {

        Map<String, Object> chargeParams = new HashMap<String, Object>();
        chargeParams.put("amount", (int)(amount * 100));
        chargeParams.put("currency", "PLN");
        chargeParams.put("source", token);
        Charge charge = Charge.create(chargeParams);
        return charge;
    }

}
