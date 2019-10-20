import {Component} from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
  mediaItems = [
    {
    id:1,
    name: 'FireBug',
    medium: 'Series',
    category:'Science Fiction',
    year:2020,
    watchedOn: 1294166565384,
    isFavorite:false
  },{
    id:2,
    name: 'Jewel Thief',
    medium: 'Series',
    category:'Science Fiction',
    year:2020,
    watchedOn: 1294166565384,
    isFavorite:false
  },{
    id:1,
    name: 'Titanic',
    medium: 'Movie',
    category:'Science',
    year:2020,
    watchedOn: 1294166565384,
    isFavorite:false
  },{
    id:1,
    name: 'Halloway',
    medium: 'Series',
    category:'Science Fiction',
    year:2020,
    watchedOn: 1294166565384,
    isFavorite:false
  },
]
  
 onMediaItemDelete(mediaItem){

 }
}
