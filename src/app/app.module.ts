import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    DetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
