import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Stay } from '../models/stay.model';
import { StayService } from './stay.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class StayResolver implements Resolve<Stay> {
  constructor(private stayService: StayService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stay> {
    const stayId = route.params['stayId']
    return this.stayService.getById(stayId);
  }
 }