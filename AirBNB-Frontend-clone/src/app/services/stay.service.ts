import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { Stay, StayFilter } from '../models/stay.model';

@Injectable({
  providedIn: 'root'
})
export class StayService {

  constructor( private httpService: HttpService) { }
  
  STAY_URL: string = 'stay/';

  private _stays$ = new BehaviorSubject<Stay[]>([]);
  public stays$ = this._stays$.asObservable();
  
  private _stayFilter$ = new BehaviorSubject<StayFilter>(this.getEmptyFilter());
  public stayFilter$ = this._stayFilter$.asObservable();

  private _stayLength$ = new BehaviorSubject<number>(1);
  public stayLength$ = this._stayLength$.asObservable();


  public getEmptyFilter() {
    return {
      likeByUser: '',
      place: '',
      label: '',
      hostId: '',
      isPetAllowed: 'false'
    }
  }

  public async setFilterAsync(filter: StayFilter) {
    this._stayFilter$.next(filter);
    this.loadFullLength();
    await this.loadStays(0, false);
  }

  public async loadFullLength() {
    const filterBy = this._stayFilter$.value;
    const queryParams = this.getQueryParams(filterBy)
    const stayLength = await lastValueFrom(this.httpService.get(this.STAY_URL + 'length/' + queryParams, null)) as number
    this._stayLength$.next(stayLength)
  }

  private getQueryParams(filterBy: StayFilter, index: number = 0) {   
    let params = `?page=${index}&`
    if (filterBy.likeByUser) params += `likeByUser=${filterBy.likeByUser}&`
    if (filterBy.hostId) params += `hostId=${filterBy.hostId}&`
    if (filterBy.label) params += `label=${filterBy.label}&`
    if (filterBy.isPetAllowed) params += `isPetAllowed=${filterBy.isPetAllowed}&`
    if (filterBy.place) params += `place=${filterBy.place}`    
    return params;
  }

  public async loadStays(index: number = 0, isConnectStays: boolean = true) {
    const filterBy = this._stayFilter$.value
    const queryParams = this.getQueryParams(filterBy, index)
    const prevStays = isConnectStays ? this._stays$.value : []
    const stays = await lastValueFrom(this.httpService.get(this.STAY_URL + queryParams, null)) as Stay[]
    this._stays$.next(prevStays.concat(stays))
    console.log(this._stayFilter$.value)
  }

  
  public getById(stayId: string): Observable<Stay> {
    return this.httpService.get(this.STAY_URL + stayId, null) as Observable<Stay>
  }
}
