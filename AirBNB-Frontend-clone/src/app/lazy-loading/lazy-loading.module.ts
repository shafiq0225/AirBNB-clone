import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StayDetailsComponent } from '../pages/stay-details/stay-details.component';


const routes: Routes = [
  { path: '', component: StayDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingModule { }
