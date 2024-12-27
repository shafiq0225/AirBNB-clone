import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrl: './header-filter.component.scss'
})


export class HeaderFilterComponent {
  @Input() isHeaderFilterActive!: boolean;
  @Output() toggleHeaderFilter = new EventEmitter<void>()  
  faMagnifyingGlass = faMagnifyingGlass
  modalNav = '';
  date: string | null = null;
  order !: Order
  onToggleHeaderFilter() {
    this.toggleHeaderFilter.emit()
  }

  onClickDate(val: string) {
    this.modalNav = val
  }

  getCheckIn() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length >= 1) {
        this.order.startDate = new Date(dates[0])
        return new Date(dates[0])
      }
    }
    return
  }

  getCheckOut() {
    if (this.date) {
      const dates = this.date?.split('-')
      if (dates.length === 2) {
        this.order.endDate = new Date(dates[1])
        return new Date(dates[1])
      }
    }
    return
  }

  setModalNav(val: string) {
    this.modalNav = val
  }

  getGuests() {
    // let str = this.order.guests.adults + this.order.guests.children > 0 ? (this.order.guests.adults + this.order.guests.children) + ' guests ' : ''
    // str += this.order.guests.infants > 0 ? ' ,' + this.order.guests.infants + ' infants ' : ''
    // str += this.order.guests.pets > 0 ? ' ,' + this.order.guests.pets + ' pets ' : ''
    // return str
  }
}
