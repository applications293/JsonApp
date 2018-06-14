import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { InfoService } from './service/info.service';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    JsonpModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
