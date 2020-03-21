import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpService } from '../services/http.service';
import { MatTableDataSource} from '@angular/material';
import { ActivatedRoute , Router} from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
export interface albums {
  title: string;
  userId: number;
  id: number;
}


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {

 

  constructor(private httpService:HttpService, private route:ActivatedRoute,private router: Router,) { }
  displayedColumns = ['id','title'];
  dataSource;
  selection = new SelectionModel<albums>(true, []);
  albums;
  disableShowPhotos = true;
  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.httpService.getHttpResult('albums', {}).subscribe(albums => {
        console.log(albums);
        this.albums = albums.filter(album => {
          return album.userId === id;
        });
        this.dataSource = new MatTableDataSource<albums>(this.albums);
    });
  }

  showPhotos() {
    let ids = this.selection.selected.map( album => album.id).toString();
    this.router.navigate(['/photos',{  id: ids }])
  }
  
  checkAlbum(element) {
    this.selection.isSelected(element);
   
  }

  checkDisabled(element) {
    let ids = this.selection.selected.map(select => select.id)
    if(this.selection.selected.length >= 2 && ids.includes(element.id)) {
      return false;
    } else if(this.selection.selected.length >= 2) {
      return true;
    }
  }
}
