import { Component, Input, OnChanges} from '@angular/core';
import { CardInfo } from './interface/card-info';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  implements OnChanges{
  @Input() cardInput!: CardInfo;
  date!: string;
  ngOnChanges(): void {
    this.date = this.cardInput?.cardMonth + '/' + this.cardInput?.cardYear
  }

}
