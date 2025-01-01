import { Component, Input } from '@angular/core';
import { Stay } from '../../models/stay.model';

@Component({
  selector: 'app-special-perks',
  templateUrl: './special-perks.component.html',
  styleUrl: './special-perks.component.scss'
})
export class SpecialPerksComponent {
  @Input() stay!: Stay
}
