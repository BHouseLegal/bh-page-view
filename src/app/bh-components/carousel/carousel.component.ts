import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'bh-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items!: {id: string, imageUrl: string}[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplaySpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1400: {
        items: 5
      }
    },
    nav: true,
    autoplay: true,
    autoWidth: true,
    margin: 20,
    stagePadding: 70,
    center: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  handlePage(event: any) {
    console.log(event)
  }

}
