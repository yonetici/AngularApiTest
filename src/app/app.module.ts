import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule} from '@angular/common/http';
import {NgpSortModule} from 'ngp-sort-pipe';
import {RouterModule} from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgpSortModule,
    RouterModule.forRoot([
      {path: 'users', component: UserComponent},
      {path: 'user/:id', component: UserDetailsComponent},
      {path: 'welcome', component: UserComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
