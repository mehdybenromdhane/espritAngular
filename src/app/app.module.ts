import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    ArticlesComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
