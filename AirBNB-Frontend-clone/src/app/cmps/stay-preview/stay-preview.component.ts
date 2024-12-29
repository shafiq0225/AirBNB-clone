import { Component, Input } from '@angular/core';
import { StatReviews, Stay } from '../../models/stay.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stay-preview',
  templateUrl: './stay-preview.component.html',
  styleUrl: './stay-preview.component.scss'
})
export class StayPreviewComponent {
  @Input() stay !: Stay;
  faStar = faStar

  getRateAvg() {
    let rate = 0
    let key: keyof StatReviews
    for(key in this.stay.statReviews) {
      rate += this.stay.statReviews[key]
    }
    return (rate / 6).toFixed(2)
  }
}
