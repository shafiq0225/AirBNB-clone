import { Component, ViewChild } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import filters from '../../../assets/data/filters.json';
@Component({
  selector: 'app-stay-filter',
  templateUrl: './stay-filter.component.html',
  styleUrl: './stay-filter.component.scss'
})
export class StayFilterComponent {
  isFullyScrolledLeft: boolean = false;
  isFullyScrolledRight: boolean = false;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  
  filters = filters;

  @ViewChild('elFilter') elFilter: any
}
