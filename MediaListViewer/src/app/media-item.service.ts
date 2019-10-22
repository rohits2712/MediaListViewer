export class MediaItemService {
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
        id:3,
        name: 'Titanic',
        medium: 'Movie',
        category:'Science',
        year:2020,
        watchedOn: 1294166565384,
        isFavorite:false
      },{
        id:4,
        name: 'Halloway',
        medium: 'Series',
        category:'Science Fiction',
        year:2020,
        watchedOn: 1294166565384,
        isFavorite:false
      },
    ];

    get(){
        return this.mediaItems;
    }
    
    add(mediaItem){this.mediaItems.push(mediaItem)}

    delete(mediaItem){
        const index = this.mediaItems.indexOf(mediaItem);
        if(index>=0){this.mediaItems.splice(index,1);}
    }
}