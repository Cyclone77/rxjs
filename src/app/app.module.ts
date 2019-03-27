import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { InMemoryDataService } from './in-memory-data.service';
import { ObervableComponent } from './rxjstest/obervable/obervable.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    ObervableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
