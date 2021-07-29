import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { SelectionDetailsComponent } from './selection-details/selection-details.component';
import { AnnounceComponent } from './announce/announce.component';
import { AnnouncerComponent } from './announcer/announcer.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    SelectionDetailsComponent,
    AnnounceComponent,
    AnnouncerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
