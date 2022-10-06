import { Component, OnInit } from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  public obs$: Observable<any> | undefined;
  constructor() { }

  ngOnInit(): void {
    this.obs$ = of(this.arr)
      .pipe(
        tap(value => console.log(value)),
        catchError(error => {
          console.log('error: ', error);
          return of(error);
        })
      )
  }


}
