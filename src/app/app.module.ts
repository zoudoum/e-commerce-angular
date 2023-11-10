import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
