import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { HttpService } from '../services/http.service';
import {  HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    HttpService
  ]
})
export class UsersModule { }
