import {Component, OnInit} from '@angular/core';
import {ajax} from 'rxjs/ajax'
import {catchError, map, Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  public obs$: Observable<any> | undefined;
  constructor() {
  }
//https://api.github.com/search/users?q=
  ngOnInit(): void {
     this.obs$ = ajax.getJSON('https://api.github.com/users')
      .pipe(
        catchError(error => {
          console.log('error: ', error);
          return of(error);
        })
      );

  }

}
