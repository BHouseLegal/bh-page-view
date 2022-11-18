import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'bh-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  cars = [{title: 'volvo', description: 'son una excelente empresa'},{title: 'mazda', description: 'son una excelente empresa'}, {title: 'mercedez', description: 'son una excelente empresa'}, {title: 'volvo', description: 'son una excelente empresa'}]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  handlePage(event: any) {
    console.log(event)
  }

}
