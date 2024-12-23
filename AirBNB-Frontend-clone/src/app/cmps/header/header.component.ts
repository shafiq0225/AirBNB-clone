import { Component, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faBars = faBars;
  isShowHeaderMenuModal: boolean = false
  isOpenLanguageModal: boolean = false
  @Input() isShowFilter!: boolean
  isHeaderFilterActive: boolean = false
  onToggleHeaderMenuModal() {
    this.isShowHeaderMenuModal = !this.isShowHeaderMenuModal
  } 

  toggleHeaderFilter() {
    this.isHeaderFilterActive = !this.isHeaderFilterActive
  }
}
