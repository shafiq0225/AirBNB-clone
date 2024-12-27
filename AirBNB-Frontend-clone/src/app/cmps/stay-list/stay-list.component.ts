import { Component, Input } from '@angular/core';
import { Stay } from '../../models/stay.model';

@Component({
  selector: 'app-stay-list',
  templateUrl: './stay-list.component.html',
  styleUrl: './stay-list.component.scss'
})
export class StayListComponent {
  @Input() stays!: Stay[] | null;
}
