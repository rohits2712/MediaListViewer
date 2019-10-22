import {Component, OnInit} from '@angular/core';
import {MediaItemService} from './media-item.service';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit{
 mediaItems;
constructor(private mediaItemService : MediaItemService){}
ngOnInit(){
  this.mediaItems = this.mediaItemService.get();
}

 onMediaItemDelete(mediaItem){
  this.mediaItemService.delete(mediaItem);
 }
}
