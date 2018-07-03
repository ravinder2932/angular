import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {DishService} from '../services/dish.service';
import {LeaderService} from '../services/leader.service';
import {Leader} from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  constructor(private dishservice:DishService,
    private promotionservice:PromotionService,
    private LeaderService:LeaderService
  ) { }

  ngOnInit() 
  {
    this.promotion=this.promotionservice.getFeaturedPROMOTION();
    this.dish=this.dishservice.getFeaturedDish();
    this.leader=this.LeaderService.getLeadersByFeature();
  }

}
