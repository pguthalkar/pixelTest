import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor( private route:ActivatedRoute, private httpService :HttpService) { }
  photos;
  albumIndex = '';
  photosByIndex = {};
  ngOnInit() {
    let ids = this.route.snapshot.paramMap.get('id').split(','); 
    if(ids.length > 0) {
      this.albumIndex = 'first';
    }
    this.httpService.getHttpResult('photos', {}).subscribe(photos => {
      
      let allPhotos = photos.filter(photo => {
        return ids.includes(photo.albumId.toString());
      });
      if(ids.length == 2) {

        allPhotos.forEach(photo => {
          ids.forEach( (id,index) => {
            let photoIndex = 'first';
            if(index == 1) {
              photoIndex = 'second';
            }
            if(photo.albumId == id) {
              if(!this.photosByIndex[photoIndex]) {
                this.photosByIndex[photoIndex] = [];
              }
              this.photosByIndex[photoIndex].push(photo);
            }
          });
        });
        this.photos = this.photosByIndex[this.albumIndex];
        
        setInterval(()=> {
          
          if(this.albumIndex == 'second') {
            this.albumIndex = 'first';
          } else {
            this.albumIndex = 'second';
          }
          this.photos = this.photosByIndex[this.albumIndex];
         
        },10 * 1000)
      } else {
        this.photos = allPhotos;
      }
      console.log(this.photosByIndex);
      
      
      //this.dataSource = new MatTableDataSource<any>(this.photos);
  });
  }

}
