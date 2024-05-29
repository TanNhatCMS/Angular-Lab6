import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {itemModel} from "../../utils/itemModel";

@Component({
  selector: 'app-bai1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})


export class Bai1Component {

  ImgV: any[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
  Content: string = 'Là dòng sản phẩm có thiết kế mỏng nhẹ, sang trọng và tinh tế cùng với đó là giá thành phải chăng nên MacBook Air đã thu hút được đông đảo người dùng yêu thích và lựa chọn. Một trong những phiên bản mới nhất mà kháchhàng không thể bỏ qua khi đến với CellphoneS đó là MacBook Air M1. Dưới đây là chi tiết về thiết kế, cấu hình của máy.'
  products: any[] =
    [{
      img: '1.jpg',
      name: 'Apple MacBook Air M1 256GB 2020 I I Chính hãng Apple Việt Nam ',
      price: 26500,
      rating: 3,
      inStock: 5,
      color: 'Đen',
      onSale:
        true,
      quality: 0
    },
      {
        img: '4.jpg',
        name: 'Apple MacBook Air 13 256GB 2020 I I Chính hãng Apple Việt Nam ',
        price: 29500,
        rating: 4,
        inStock: 3,
        color: 'Xanh',
        onSale:
          false,
        quality: 0
      },
      {
        img: '3.jpg',
        name: 'Apple MacBook Air 13 512GB 2020 I I Chính hãng Apple Việt Nam ',
        price: 30500,
        rating: 5,
        inStock: 0,
        color: 'Cam',
        onSale:
          true,
        quality: 0
      }
    ]
  selectedVariant: number = 0
  cart: any[] = []
  imgs: string = '1.jpg'
  cartItems: itemModel[] = []
  Total() {
    let sum = 0;
    this.cartItems.forEach(item => sum += item.qty * item.price)
    return sum
  }

  totalItems() {
    let sum = 0;
    this.cartItems.forEach(item => sum += item.qty)
    return sum
  }

  changeImg(item: any) {
    return item
  }


  Remove(i: any) {
    return i
  }

  DeleteAll() {

  }


  ChangeImage() {

  }

  inStock() {
    return this.products[this.selectedVariant].inStock
  }

  addCart(selectedVariant: number) {

  }

  inSale() {
    return this.products[this.selectedVariant].onSale
  }

  priceOnSale() {
    return this.products[this.selectedVariant].price * 0.8
  }

  color() {
    return this.products[this.selectedVariant].color
  }

  starRating() {
    return Array(this.products[this.selectedVariant].rating);
  }

  price() {
    return this.products[this.selectedVariant].price
  }

  title() {
    return this.products[this.selectedVariant].name
  }
}
