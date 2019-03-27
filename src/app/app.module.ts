import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { InMemoryDataService } from './in-memory-data.service';
import { ObserverPatternComponent } from './rxjstest/observer-pattern/observer-pattern.component';
import { ObservableComponent } from './rxjstest/observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    ObserverPatternComponent,
    ObservableComponent
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
