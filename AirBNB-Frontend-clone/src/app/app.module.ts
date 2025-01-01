import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';
import { HeaderComponent } from './cmps/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderFilterComponent } from './cmps/header-filter-folder/header-filter/header-filter.component';
import { HeaderMenuModalComponent } from './cmps/header-menu-modal/header-menu-modal.component';
import { StayFilterComponent } from './cmps/stay-filter/stay-filter.component';
import { StayListComponent } from './cmps/stay-list/stay-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StayPreviewComponent } from './cmps/stay-preview/stay-preview.component';
import { ImgCarouselComponent } from './cmps/img-carousel/img-carousel.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { StayDetailsComponent } from './pages/stay-details/stay-details.component';
import { SkeletonLoaderComponent } from './cmps/skeleton-loader/skeleton-loader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    StayIndexComponent,
    HeaderComponent,
    HeaderFilterComponent,
    HeaderMenuModalComponent,
    StayFilterComponent,
    StayListComponent,
    StayPreviewComponent,
    ImgCarouselComponent,
    FooterComponent,
    StayDetailsComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
