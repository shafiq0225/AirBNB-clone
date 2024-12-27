import { Component, Input } from '@angular/core';
import { Stay } from '../../models/stay.model';

@Component({
  selector: 'app-stay-preview',
  templateUrl: './stay-preview.component.html',
  styleUrl: './stay-preview.component.scss'
})
export class StayPreviewComponent {
  @Input() stay !: Stay;
}
