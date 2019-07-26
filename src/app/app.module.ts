import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './app.routes';

import { AuthService } from './services/auth.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
