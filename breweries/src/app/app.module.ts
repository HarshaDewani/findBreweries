import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { ButtonComponent } from './button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { BreweriesServices } from './services/breweries.services';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TitleComponent,
    DescriptionComponent,
    ButtonComponent,
    NavigationComponent,
    AboutComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    HomeComponent,
    ShoppingComponent,
    InputComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [BreweriesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
