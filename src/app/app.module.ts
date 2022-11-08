import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {Route, RouterOutlet, RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Route[]=[
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterModule.forRoot((routes)),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
