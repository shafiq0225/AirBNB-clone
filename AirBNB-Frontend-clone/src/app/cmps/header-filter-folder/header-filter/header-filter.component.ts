import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-filter',
  templateUrl: './header-filter.component.html',
  styleUrl: './header-filter.component.scss'
})
export class HeaderFilterComponent {
  faMagnifyingGlass = faMagnifyingGlass
}
