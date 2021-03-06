import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import{CategoryListPipe} from './category-list.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import {lookupLists,lookupListToken} from './providers';


@NgModule({
  imports:[
    BrowserModule,FormsModule,ReactiveFormsModule
  ], //other modules that it will need
  declarations:[AppComponent, MediaItemComponent,CategoryListPipe, MediaItemFormComponent], //components pipes directives that dont come from another module 
  providers: [
    { provide: lookupListToken, useValue:lookupLists}
  ],
  bootstrap:[AppComponent], //bootstrap used for route module, entry point for app code
})
export class AppModule {}