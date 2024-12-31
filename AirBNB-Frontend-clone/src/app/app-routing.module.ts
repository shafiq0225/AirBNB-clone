import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';
import { StayResolver } from './services/stay.resolver';

const routes: Routes = [
  {
    path: ':stayId',
    loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule),
    resolve: { stay: StayResolver },
  },
  { path: '', component: StayIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
