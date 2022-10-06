import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.css']
})
export class CreationOperatorsComponent implements OnInit {
  ajaxcardtext = 'It creates an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.'
  fromcardtext: string = 'Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.';
  intervalcardtext: string = 'Creates an Observable that emits sequential numbers every specified interval of time';

  constructor() { }

  ngOnInit(): void {
  }

}
