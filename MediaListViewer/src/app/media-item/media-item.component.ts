import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent  {
  name = "Shawshank Redemption";
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  wasWatched(){
    return true;
  }

  onDelete(){
    console.log('deleted');
    this.delete.emit(this.mediaItem);
  }
}
