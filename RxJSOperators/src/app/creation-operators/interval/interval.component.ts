import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {EMPTY, interval, Observable, take, tap} from "rxjs";

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit, AfterViewInit {
  public obs$: Observable<number> = EMPTY
  @ViewChild('newElem', { read: TemplateRef }) newElem!: TemplateRef<any>
  @ViewChild('content', { read: ViewContainerRef }) content!: ViewContainerRef
  test: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.obs$ = interval(1000).pipe(
        tap(elem => console.log(elem)),
        take(20)
    )


  }

  ngAfterViewInit(): void{
    this.obs$.subscribe(
      elem => {
        this.test = elem
        this.content.createEmbeddedView(this.newElem,  {name: elem})
      }
    )
  }


  ngOnDestroy(): void {
    // this.destroy$.next(true);
    // this.destroy$.unsubscribe();
  }


}
