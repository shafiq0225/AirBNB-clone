import { Component, Input } from '@angular/core';
import { Stay } from '../../models/stay.model';
import { faAngleLeft, faAngleRight, faCircle, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrl: './img-carousel.component.scss'
})
export class ImgCarouselComponent {
  @Input() stay !: Stay;
  faHeart = faHeart;
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faCircle = faCircle;
  isLikeByUser: boolean = false;
  currIdx = 0;

  onClickArrow(ev: Event, diff: number) {
    ev.stopPropagation()
    this.currIdx += diff
  }

  checkRightArrow() {
    return this.currIdx < (this.stay.imgUrls.length - 1)
  }


  setCurrIdx(ev: Event, idx: number) {
    ev.stopPropagation()
    this.currIdx = idx
  }

  getClassPagination(idx: number) {
    return this.currIdx === idx ? 'active' : ''
  }
}
