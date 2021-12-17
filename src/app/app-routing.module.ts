import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SagitComponent } from './pages/sagit/sagit.component';
import { LoginComponent } from './pages/login/login.component';
import { UserAreaComponent } from './pages/user-area/user-area.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { SearchComponent } from './pages/search/search.component';
import { AuthGuard } from './guards/auth.guard';
import { RequestCallComponent } from './pages/request-call/request-call.component';
import { PropertyRequestComponent } from './pages/property-request/property-request.component';
import { RequestComponent } from './components/user/request/request.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { PropertiesComponent } from './components/user/properties/properties.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Solid Agents' } },
  {
    path: 'sagit',
    component: SagitComponent,
    canActivate: [AuthGuard],
    data: { title: 'Add New Property' },
  },
  {
    path: 'search',
    component: SearchComponent,
    data: { title: 'Search Result' },
  },
  {
    path: 'request_call',
    component: RequestCallComponent,
    data: { title: 'Request A Call' },
  },
  {
    path: 'request_property',
    component: PropertyRequestComponent,
    data: { title: 'Request A Call' },
  },
  {
    path: 'property_requests/:type/:id/:title',
    component: RequestDetailsComponent,
    data: { title: 'Property Request Details' },
  },
  {
    path: 'about-sa',
    component: AboutComponent,
    data: { title: 'About Solid Agents' },
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
    data: { title: 'How It Works' },
  },
  {
    path: 'user-area',
    component: UserAreaComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'requests',
        component: RequestComponent,
      },
      {
        path: 'properties',
        component: PropertiesComponent,
      },
      {
        path: '',
        component: ProfileComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'signup', component: SignupComponent, data: { title: 'Sign Up' } },
  {
    path: 'properties/:type/:id/:title',
    component: PropertyDetailsComponent,
    data: { title: 'Property Details' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
