import { Component } from '@angular/core';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';




@Component({
  selector: 'app-carousele',
  imports: [],
  templateUrl: './carousele.component.html',
  styleUrl: './carousele.component.scss'
})
export class CarouseleComponent {
  const swiper = new Swiper;
}
