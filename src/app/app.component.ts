import { Component } from '@angular/core';
import {ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {defaultRouteData, isRouteData, RouteData} from './app-routing.module';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // public isNavbarCollapsed = true;
  routeData = defaultRouteData;

  get isBasicHeader() {
    return this.routeData.header === 'basic';
  }

  get isSpecialHeader() {
    return this.routeData.header === 'special';
  }

  constructor(
    router: Router,
    private title: Title
  ) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.routeData = defaultRouteData;
        this.updateRouteDataFrom(router.routerState.snapshot.root);
        this.handleUpdatedRouteData();
      }
    });
  }

  private updateRouteDataFrom(route: ActivatedRouteSnapshot) {
    if (isRouteData(route.data)) {
      this.routeData = {
        ... this.routeData,
        ... route.data
      };
    } else {
      route.children.forEach(child => this.updateRouteDataFrom(child));
    }
  }

  private handleUpdatedRouteData() {
    this.title.setTitle(this.routeData.title);
  }
}

