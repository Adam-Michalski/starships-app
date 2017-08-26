import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarshipComponent } from './starship/starship.component';
import { StarshipService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StarshipComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers:[
    StarshipService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
