import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IndexComponentComponent } from './component/index-component/index-component.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DataService } from './servies/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    IndexComponentComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
