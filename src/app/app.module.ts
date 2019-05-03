import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery.service';
import { ContactComponent } from './contact/contact.component';

import { ImageThumbnail } from './pipes/image-thumbnail.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GalleryComponent,
    ImageThumbnail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
