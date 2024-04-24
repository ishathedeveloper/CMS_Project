import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from '../app/MainPages/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './MainPages/services/services.component';
import { PortfolioComponent } from './MainPages/portfolio/portfolio.component';
import { ContactUsComponent } from './MainPages/contact-us/contact-us.component';
import { BlogsComponent } from './MainPages/blogs/blogs.component';
import { CreateBLogComponent } from './MainPages/create-blog/create-blog.component';
import { HomeComponent } from './MainPages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactUsComponent,
    BlogsComponent,
    CreateBLogComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
