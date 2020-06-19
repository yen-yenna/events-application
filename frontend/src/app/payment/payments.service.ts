import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private baseUrl = 'http://localhost:8080/api/v1/charge';
  constructor(private http: HttpClient) { }
  handler: any = null;
  tooken: any;
 
  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      // tslint:disable-next-line:no-shadowed-variable
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (window as any).StripeCheckout.configure({
          key: 'pk_test_',
          locale: 'auto',
          token(token: any) {
          },
          success_url: 'http://localhost:4200/charge'
        });
      };
      window.document.body.appendChild(s);
    }
  }
  async pay(amount) {
    const handler = (window as any).StripeCheckout;
    this.generateToken(handler, amount);
    console.log('eeee');
    console.log(this.tooken);
   // this.toBackend(amount, this.tooken);

  }

  generateToken(handler, amount) {
    const self = this;
    return handler.configure({
      key: 'pk_test_',
      locale: 'auto',
      token(token: any) {
        // this.tooken = token.id;
        console.log('Utworzony token - ' + token.id);
        self.tooken = token.id;
        return token.id;
        // alert('Token Created!!');
      },
      success_url: 'http://localhost:4200/charge'
    }).open({
      name: 'Checkout',
      amount: amount * 100
    });
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
 
}


