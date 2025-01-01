import { Component, OnInit } from '@angular/core';
import { StatReviews, Stay } from '../../models/stay.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { faArrowUpFromBracket, faCircle, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stay-details',
  templateUrl: './stay-details.component.html',
  styleUrl: './stay-details.component.scss'
})
export class StayDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  stay!: Stay;
  staySubscription!: Subscription;
  isLikeByUser: boolean = false;
  starIcon = faStar;
  point = faCircle;
  shareIcon = faArrowUpFromBracket;
  heartIcon = faHeart;

  ngOnInit(): void {
    // this.orderSubscription = this.orderService.order$.subscribe(order => this.order = order)
    this.staySubscription = this.route.data.subscribe(data => {
      this.stay = data['stay'];
      console.log(this.stay)
    });
  }

  getRateAvg() {
    let rate = 0
    let key: keyof StatReviews
    for (key in this.stay.statReviews) {
      rate += this.stay.statReviews[key]
    }

    return (rate / 6).toFixed(2)
  }

}
