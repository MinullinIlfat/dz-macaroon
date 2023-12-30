import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {

  @Input() advantage: AdvantageType;
  constructor(public cartService: CartService) {
    this.advantage = {
      title: '',
      description: '',
      numAdvantage: 0
    }
  }

  ngOnInit(): void {

  }
}
