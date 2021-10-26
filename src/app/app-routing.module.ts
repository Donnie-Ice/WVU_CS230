import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ConverseComponent } from './body/converse.component';
import { HelpComponent } from './body/help.component';
import { JoinComponent } from './body/join.component';
import { JordanComponent } from './body/jordan.component';
import { SignInComponent } from './body/sign-in/sign-in-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: BodyComponent },
  { path: 'Jordan', component: JordanComponent },
  { path: 'Converse', component: ConverseComponent },
  { path: 'Help', component: HelpComponent },
  { path: 'Join', component: JoinComponent },
  { path: 'SignIn', component: SignInComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
