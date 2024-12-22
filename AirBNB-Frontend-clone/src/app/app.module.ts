import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { StayIndexComponent } from './pages/stay-index/stay-index.component';
import { HeaderComponent } from './cmps/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderFilterComponent } from './cmps/header-filter-folder/header-filter/header-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    StayIndexComponent,
    HeaderComponent,
    HeaderFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
