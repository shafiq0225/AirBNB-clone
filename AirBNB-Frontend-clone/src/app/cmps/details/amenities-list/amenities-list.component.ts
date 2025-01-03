import { Component, Input } from '@angular/core';
import { Stay } from '../../../models/stay.model';

@Component({
  selector: 'app-amenities-list',
  templateUrl: './amenities-list.component.html',
  styleUrl: './amenities-list.component.scss'
})
export class AmenitiesListComponent {
  @Input() stay!: Stay
}
