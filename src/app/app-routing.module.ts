import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MainPages/about/about.component';
import { ContactUsComponent } from './MainPages/contact-us/contact-us.component';
import { BlogsComponent } from './MainPages/blogs/blogs.component';
import { CreateBLogComponent } from './MainPages/create-blog/create-blog.component';
import { PortfolioComponent } from './MainPages/portfolio/portfolio.component';
import { ServicesComponent } from './MainPages/services/services.component';
import { HomeComponent } from './MainPages/home/home.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'CreateBlog', component: CreateBLogComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'Service', component: ServicesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
