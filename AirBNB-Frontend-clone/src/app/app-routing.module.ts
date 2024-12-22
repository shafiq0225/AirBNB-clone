import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';

const routes: Routes = [
  { path: '', component: StayIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
