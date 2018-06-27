import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    {
      name: 'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    },
    ];

  constructor() { }

  ngOnInit() {
  }

}
