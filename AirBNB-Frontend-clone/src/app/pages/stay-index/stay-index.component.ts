import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Stay, StayFilter } from '../../models/stay.model';
import { StayService } from '../../services/stay.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stay-index',
  templateUrl: './stay-index.component.html',
  styleUrl: './stay-index.component.scss'
})
export class StayIndexComponent implements OnInit {
  constructor(private stayService: StayService, private activatedRoute: ActivatedRoute) {}
  stays$ !: Observable<Stay[]> | null;
  subscriptionStayLength!: Subscription;
  stayFullLength: number = 0;
  stayLoadIndex: number = 1

  async ngOnInit() {
    this.subscriptionStayLength = this.stayService.stayLength$.subscribe(stayLength => {
      this.stayFullLength = stayLength
      this.stayLoadIndex = 1
    })

    await this.setFilterFromParams()
    this.stays$ = this.stayService.stays$
  }

  async setFilterFromParams() {
    const stayFilter = {
      ...this.stayService.getEmptyFilter(),
      ...this.activatedRoute.snapshot.queryParams as StayFilter
    }    
    await this.stayService.setFilterAsync(stayFilter)
  }
  
}
