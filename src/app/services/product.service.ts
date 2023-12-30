import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {AdvantageType} from "../types/advantage.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {

  }

  getProducts(): ProductType[] {
    return [
      {
        image: '1.png',
        name: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: '2.png',
        name: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: '3.png',
        name: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: '4.png',
        name: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.70
      },
    ]
  }

  getAdvantages(): AdvantageType[] {
    return [
      {
        title: 'Лучшие продукты',
        description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
        numAdvantage: 1
      },
      {
        title: 'Много вкусов',
        description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
        numAdvantage: 2
      },
      {
        title: 'Бисквитное тесто',
        description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
        numAdvantage: 3
      },
      {
        title: 'Честный продукт',
        description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
        numAdvantage: 4
      }
    ]
  }
}
