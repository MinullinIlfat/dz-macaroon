import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public products: ProductType[] = []
  public advantages: AdvantageType[] = []

  public FormValues = {
    productTitle: '',
    fullName: '',
    phone: ''
  }

  constructor(public productService: ProductService, public cartService: CartService) {

  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.advantages = this.productService.getAdvantages();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.FormValues.productTitle = product.name.toUpperCase();
    this.cartService.count++;
    this.cartService.sum = this.cartService.sum + product.price;
    alert(product.name + ' добавлен в корзину!')
  }

  showPresent = true;

  info = {
    phone: '375293689868',
    social: 'Мы в Instagram'
  }
}
