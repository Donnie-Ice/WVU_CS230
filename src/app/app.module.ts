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
import { AppRoutingModule } from './app-routing.module';
import { ConverseComponent } from './body/converse.component';
import { JordanComponent } from './body/jordan.component';
import { HelpComponent } from './body/help.component';
import { JoinComponent } from './body/join.component';
import { LayoutConverseComponent } from './layout/layout-converse.component';
import { LayoutJordanComponent } from './layout/layout-Jordan.component';
import { LayoutHelpComponent } from './layout/layout-help.component';
import { LayoutJoinComponent } from './layout/layout-join.component';
import { ConverseCardComponent } from './body/converse_card.component';
import { ConverseSidebarComponent } from './body/converse_sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { SignInComponent } from './body/sign-in/sign-in-page.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';

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
    TopNavBar3Component,
    ConverseComponent,
    JordanComponent,
    HelpComponent,
    JoinComponent,
    LayoutConverseComponent,
    LayoutJordanComponent,
    LayoutHelpComponent,
    LayoutJoinComponent,
    ConverseCardComponent,
    ConverseSidebarComponent,
    UserInfoComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
