import { Component, OnInit } from '@angular/core';
import {GalleryService, imageData} from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  galleryContent: imageData[] | null = null;

  constructor(public galleryManager: GalleryService) {
    this.searchImages('');
    console.log(this.galleryContent);
  }

  searchImages(query: string) {
    query = query.toLowerCase().trim()
      // .filter(image => image.pieceTitle.toLowerCase().includes(query))
      // .sort((a, b) => a.pieceTitle === b.pieceTitle ? 0 : a.pieceTitle < b.pieceTitle ? -1 : 1);

    

    this.galleryContent = this.galleryManager.images
  }

  ngOnInit() {
  }

}
