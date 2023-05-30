import { Component } from '@angular/core';
import { CardInfo } from './cards/interface/card-info';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
  cardInfo!: CardInfo;

  getInputCard(form : FormGroup){
    this.cardInfo= {
      cardName: form.value.cardName,
      cardNumber: form.value.cardNumber,
      cardMonth: form.value.cardMonth,
      cardYear: form.value.cardYear,
      cardSecurity: form.value.cardSecurity,
    };
    console.log("cardInfo Foi populado"+ this.cardInfo)
  }
}
