import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {
  get images() { 
    return images;
  }


  constructor() { }

}

const images: imageData[] = [
  {fileName:"LAP_business_card_back.png","path":"design/","pieceTitle":"Light At Play Business Card","broadCategory":"graphic_desgin","specificType":"business_card","qualityRating":4,"CreationDate":2014,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"LAP_business_card_front.png","path":"design/","pieceTitle":"Light At Play Business Card","broadCategory":"graphic_desgin","specificType":"business_card","qualityRating":4,"CreationDate":2014,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"tuibSmallBlue.jpeg","path":"design/","pieceTitle":"Tangoed Up In Blues Logo","broadCategory":"graphic_desgin","specificType":"logo","qualityRating":4,"CreationDate":2015,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"ruth_logo_standalone.svg","path":"design/","pieceTitle":"Camilla Kaplan Logo","broadCategory":"graphic_desgin","specificType":"logo","qualityRating":4,"CreationDate":2016,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"magical_seams_logo.png","path":"design/","pieceTitle":"Magical Seams Logo","broadCategory":"graphic_desgin","specificType":"logo","qualityRating":5,"CreationDate":2018,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"cjllogo.png","path":"design/","pieceTitle":"Climate Justice League Logo","broadCategory":"graphic_desgin","specificType":"logo","qualityRating":2,"CreationDate":2010,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"kaelidescope_poster.jpg","path":"design/kaelidescope_poster.jpg","pieceTitle":"Kaleidoscope Poster","broadCategory":"graphic_desgin","specificType":"poster","qualityRating":2,"CreationDate":2011,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"winterFormalPoster.pdf","path":"design/winterFormalPoster.pdf","pieceTitle":"Crossroads Winter Formal","broadCategory":"graphic_desgin","specificType":"poster","qualityRating":3,"CreationDate":2017,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"winterformalTicket.pdf","path":"design/winterformalTicket.pdf","pieceTitle":"Crossroads Winter Formal","broadCategory":"graphic_desgin","specificType":"ticket","qualityRating":3,"CreationDate":2017,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"why_go_renewable.jpg","path":"design/why_go_renewable.jpg","pieceTitle":"Why Go Renewable","broadCategory":"graphic_desgin","specificType":"magazine_article","qualityRating":4,"CreationDate":2013,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"LightAtPlay-2014-11-Full_Logo.png","path":"design/LightAtPlay-2014-11-Full Logo.png","pieceTitle":"Light at Play Banner Logo","broadCategory":"graphic_desgin","specificType":"logo","qualityRating":4,"CreationDate":2014,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"theWave.jpg","path":"design/theWave.jpg","pieceTitle":"The Wave","broadCategory":"fine_art","specificType":"quilt","qualityRating":5,"CreationDate":2016,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":"In 2016 a wave of progressive ideals - spearheaded by Bernie Sanders, a figurehead portentiously visited by a small finch at the podium during a visit to Oregon - crashed down into confusion and chaos. Amid the helplessness of that years end, it was vital to remeber that when a wave crashes down in froth and flare, it's energy is not lost, merely transferred under the water to take on a new form, and rise again."},
  {fileName:"vector_self_portrait.png","path":"design/vector_self_portrait.png","pieceTitle":"Self Portrait in Vector","broadCategory":"fine_art","specificType":"digital_painting","qualityRating":3,"CreationDate":2013,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"wibbeldywobbldy.pdf","path":"design/wibbeldywobbldy.pdf","pieceTitle":"Wibbeldy Wobbeldy","broadCategory":"fine_art","specificType":"acrylic_painting","qualityRating":4,"CreationDate":2013,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"resolution.jpg","path":"design/resolution.jpg","pieceTitle":"Resolution","broadCategory":"fine_art","specificType":"digital_painting","qualityRating":4,"CreationDate":2016,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":"As the ordeal of birth fades from the forefront, and the chaos and novelty of a newly formed family begins to subside, a tiny human resolves out of the rippling dots of the sickbed's all to familar pillows"},
  {fileName:"empty.png","path":"design/empty.png","pieceTitle":"Empty","broadCategory":"fine_art","specificType":"digital_painting","qualityRating":3,"CreationDate":2016,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"ginger_tea.jpg","path":"design/ginger_tea.jpg","pieceTitle":"Ginger Tea","broadCategory":"illustration","specificType":"digital_illustration","qualityRating":4,"CreationDate":2013,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"imagine.jpg","path":"design/imagine.jpg","pieceTitle":"Imagine","broadCategory":"illustration","specificType":"digital_illustration","qualityRating":4,"CreationDate":2012,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"disollution.jpg","path":"design/disollution.jpg","pieceTitle":"Dissolution","broadCategory":"illustration","specificType":"digital_illustration","qualityRating":2,"CreationDate":2012,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"the_night_train.png","path":"art/","pieceTitle":"The Night Train","broadCategory":"illustration","specificType":"digital_illustration","qualityRating":3,"CreationDate":2018,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"tithonia.png","path":"art/","pieceTitle":"Tithonia","broadCategory":"fine_art","specificType":"watercolor_painting","qualityRating":4,"CreationDate":2018,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"sunset_squirrel.png","path":"art/","pieceTitle":"Sunset","broadCategory":"illustration","specificType":"digital_illustration","qualityRating":3,"CreationDate":2018,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"oregon_boat.png","path":"art/","pieceTitle":"Boat","broadCategory":"illustration","specificType":"digital_illustration","qualityRating":3,"CreationDate":2017,"active":false,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"peacock_sparrow.png","path":"art/","pieceTitle":"Peacock Sparrow","broadCategory":"illustration","specificType":"digital_illustration","qualityRating":4,"CreationDate":2018,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"daniel3.png","path":"art/daniel3.png","pieceTitle":"Daniel","broadCategory":"illustration","specificType":"digital_illustration","qualityRating":4,"CreationDate":2018,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""},
  {fileName:"boat.png","path":"art/boat.png","pieceTitle":"Boat","broadCategory":"illustration","specificType":"digital_illustration","qualityRating":4,"CreationDate":2017,"active":true,"idealWidth":"","idealHeight":"","minWidth":"","maxWidth":"","caption":""}
  ]
  
  export interface imageData {
    fileName: string;
    path: string;
    pieceTitle: string;
    broadCategory: string;
    specificType: string;
    qualityRating: number;
    CreationDate: number;
    active: boolean;
    caption: string;
    maxWidth: string;
    minWidth: string;
    idealHeight: string;
    idealWidth: string;
  }