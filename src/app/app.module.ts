import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PricingComponent } from './pricing/pricing.component';
import { CarosuelComponent } from './carousel/carousel.component';
import { DescriptionViewComponent } from './description-view/description-view.component';
import { CustomizeViewComponent } from './customize/customize.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './app-rules/rules.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    PricingComponent,
    CarosuelComponent,
    DescriptionViewComponent,
    CustomizeViewComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
