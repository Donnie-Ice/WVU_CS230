import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { Body2Component } from './body/body2.component';
import { Body3Component } from './body/body3.component';
import { Body4Component } from './body/body4.component';
import { Body5Component } from './body/body5.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopNavBar2Component } from './header/top-nav-bar2.component';
import { TopNavBar3Component } from './header/top-nav-bar3.component';
import { LayoutMainComponent } from './layout/layout-main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    BodyComponent,
    LayoutMainComponent,
    Body2Component,
    Body3Component,
    Body4Component,
    Body5Component,
    TopNavBar2Component,
    TopNavBar3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
