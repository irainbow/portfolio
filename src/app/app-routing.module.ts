import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';

const portfolio_routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    pathMatch: 'full',
    data: {
      header: 'basic',
      title: 'Portfolio'
    } as RouteData
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      header: 'basic',
      title: 'Contact'
    } as RouteData
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(portfolio_routes) ],
})

export class AppRoutingModule {
  // constructor(private router: Router) {
  // }
  //
  // public isRouteActive(route) {
  //   return this.router.isRouteActive(this.router.generate(route))
  // }
}

export interface RouteData {
  header: 'basic' | 'special';
  title: string;
}

export const defaultRouteData: RouteData = {
  header: 'basic',
  title: 'Isha River Rose Wilson'
};

export function isRouteData(data: any): data is RouteData {
  return data && 'header' in data;
}
