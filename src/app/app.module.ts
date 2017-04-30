import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { BioPanelComponent } from './bio-panel/bio-panel.component';
import { SiteLandingComponent } from './site-landing/site-landing.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BioPanelComponent,
    SiteLandingComponent,
    HeaderNavComponent,
    BlogEntryComponent,
    FooterNavComponent
  ],
  imports: [
    AlertModule.forRoot(), 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
