import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title?: string = 'No Title';
  @Input() content?: string = 'No Content';
  @Input() routerlink?: string = '';
  @Input() image?: string = '';
  @Input() _link?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
