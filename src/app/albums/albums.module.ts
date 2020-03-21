import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import {MatTableModule, MatCheckboxModule, MatButtonModule,MatCardModule,MatGridListModule} from '@angular/material';
import { PhotosComponent } from './photos/photos.component';
@NgModule({
  declarations: [AlbumsComponent, PhotosComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class AlbumsModule { }
