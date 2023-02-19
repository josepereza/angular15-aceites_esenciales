import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromocionIconosComponent } from './components/promocion-iconos/promocion-iconos.component';
import { CustomCardsComponent } from './components/custom-cards/custom-cards.component';
import { SecretoComponent } from './pages/secreto/secreto.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListadoComponent } from './pages/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PromocionIconosComponent,
    CustomCardsComponent,
    SecretoComponent,
    FooterComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
