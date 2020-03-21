import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpService } from '../services/http.service';
import { MatPaginator, MatSort,MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private httpService:HttpService) { }
  displayedColumns = ['name','email', 'address'];
  dataSource;
  users;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {


    this.httpService.getHttpResult('users', {}).subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource<any>(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

}

