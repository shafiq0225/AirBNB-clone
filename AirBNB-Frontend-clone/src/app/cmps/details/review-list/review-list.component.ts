import { Component, Input, OnInit } from '@angular/core';
import { StatReviews, Stay } from '../../../models/stay.model';
import { faAngleRight, faCircle, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss'
})
export class ReviewListComponent {  
  @Input() stay!: Stay;
  faStar = faStar;
  point = faCircle;
  faAngleRight = faAngleRight;
  howMuchToShow = 6;
  
  getRateAvg() {
    let rate = 0
    let key: keyof StatReviews
    for(key in this.stay.statReviews) {
      rate += this.stay.statReviews[key]
    }

    return (rate / 6).toFixed(2)
  }

  getRateArr() {
    const rateArr = []
    let key: keyof StatReviews
    for(key in this.stay.statReviews) {
      const rateObj = {rateName: `${key}`, rate: this.stay.statReviews[key]}
      rateArr.push(rateObj)
    }
    return rateArr
  }

  getRatePercent(rate: number) {
    return (rate / 5) * 100 + '%'
  }

  getReviews() {
    return this.stay.reviews.slice(0, this.howMuchToShow)
  }

  onClickShowMore() {
    if(this.stay.reviews.length <= this.howMuchToShow) this.howMuchToShow = 6
    else this.howMuchToShow += 2
  }
}
