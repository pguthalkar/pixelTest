
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums.component';
import { PhotosComponent } from './photos/photos.component';


const routes: Routes = [

  {
    path: 'list/:id',
    component: AlbumsComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/