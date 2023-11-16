import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AproposComponent } from './apropos/apropos.component';
import { InfoComponent } from './info/info.component';
import { PhotoComponent } from './photo/photo.component';
import { BackgoundimagesComponent } from './backgoundimages/backgoundimages.component';
import { GalerieComponent } from './galerie/galerie.component';
import { MenuComponent } from './menu/menu.component';
import { FocusDirective } from './focus.directive';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AproposComponent,
    InfoComponent,
    PhotoComponent,
    BackgoundimagesComponent,
    GalerieComponent,
    MenuComponent,
    FocusDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
