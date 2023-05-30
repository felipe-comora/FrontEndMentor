import { Component, EventEmitter, Output } from '@angular/core';
import { CardInfo } from '../cards/interface/card-info';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {
  @Output() cardEmitter = new EventEmitter<FormGroup>();
    
  public cardForm!: FormGroup;
  
  constructor(    
     private cardforms: FormBuilder
    ){
  }
  ngOnInit():void{
    this.cardForm = this.cardforms.group({
      cardName:['',[Validators.required]],
      cardNumber:['',[Validators.required]],
      cardMonth:['',[Validators.required]],
      cardYear:['',[Validators.required]],
      cardSecurity:['',[Validators.required]],
    });
  }
  insertCard(){
    if (this.cardForm.valid) {
      this.cardEmitter.emit(this.cardForm);
    }
  }
}
