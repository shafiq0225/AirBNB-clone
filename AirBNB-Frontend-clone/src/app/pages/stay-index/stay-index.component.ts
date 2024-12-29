import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Stay, StayFilter } from '../../models/stay.model';
import { StayService } from '../../services/stay.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stay-index',
  templateUrl: './stay-index.component.html',
  styleUrl: './stay-index.component.scss'
})
export class StayIndexComponent implements OnInit {
  @ViewChild('elFooter') elFooter: any;

  constructor(private stayService: StayService, 
    private activatedRoute: ActivatedRoute, 
    public loader: LoaderService) {}

  stays$ !: Observable<Stay[]> | null;
  subscriptionStayLength!: Subscription;
  stayFullLength: number = 0;
  stayLoadIndex: number = 1;

  isLoadStay: boolean = false;
  isShowMap:boolean = false;
  isShowScroller: boolean = false;

  listIcon = faList;
  async ngOnInit() {
    this.subscriptionStayLength = this.stayService.stayLength$.subscribe(stayLength => {
      this.stayFullLength = stayLength
      this.stayLoadIndex = 1
    });

    this.loader.setLoading(true);
    await this.setFilterFromParams();
    this.loader.setLoading(false)
    this.stays$ = this.stayService.stays$
    window.addEventListener('scroll', () => this.onScroll())
    this.stays$ = this.stayService.stays$
  }

  async onPageScroll() {
   
    const element = this.elFooter.nativeElement;      
    if (element.clientHeight + element.offsetTop <= window.scrollY + window.innerHeight && !this.isShowMap) {
      console.log(this.stayFullLength)
      if (this.stayFullLength > this.stayLoadIndex * 20 && !this.isLoadStay) {
        this.isLoadStay = true;
        this.loader.setLoading(true);
        await this.stayService.loadStays(this.stayLoadIndex);
        this.isLoadStay = false;
        this.loader.setLoading(false);
        this.stayLoadIndex++;
      }
    }
  }

  async setFilterFromParams() {
    const stayFilter = {
      ...this.stayService.getEmptyFilter(),
      ...this.activatedRoute.snapshot.queryParams as StayFilter
    }    
    await this.stayService.setFilterAsync(stayFilter)
  }

  onScroll() {
    if (window.scrollY >= 150) {
      this.isShowScroller = true
    } else {
      this.isShowScroller = false
    }
  }
  
  onPageUp() {
    window.scrollTo(0, 0)
  }
}
