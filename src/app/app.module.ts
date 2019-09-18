import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularCesiumModule } from 'angular-cesium';
import { PlaneComponentComponent } from './plane-component/plane-component.component';
import { LivewindowsComponent } from './livewindows/livewindows.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneComponentComponent,
    LivewindowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
