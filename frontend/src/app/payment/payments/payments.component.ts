import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {PaymentsService} from '../payments.service';
// import { AngularFireFunctions } from '@angular/fire/functions';
import {FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Token} from '@angular/compiler';
import {log} from 'util';


// declare var StripeCheckout: StripeCheckoutStatic;
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  // @Input() amount;
  // @Input() description;
  paymentForm;

  // handler: StripeCheckoutHandler;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
  }

  confirmation: any;
  loading = false;

  ngOnInit() {
    this.loadStripe();
  }
  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(s);
    }
  }
  pay(amount) {

    const handler = (window as any).StripeCheckout.configure({
      key: 'pk_test_',
      locale: 'auto',
      token: function (token: any) {
        
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Checkout',
      amount: amount * 100
    });

  }

}
