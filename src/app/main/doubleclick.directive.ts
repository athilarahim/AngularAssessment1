import { Directive,EventEmitter,Output,HostListener,OnDestroy } from '@angular/core';
import { Subject } from "rxjs";
import { debounceTime, buffer, filter, map } from "rxjs/operators";


@Directive({
  selector: '[appDoubleclick]'
})
export class DoubleclickDirective implements OnDestroy {
  private click$ = new Subject<MouseEvent>();

  @Output()
  doubleClick = new EventEmitter<MouseEvent>();

  @HostListener("click", ["$event"])
  onClick(event:any) {
    this.click$.next(event);
    console.log("hiiiii");
    
  }

  ngOnInit() {
    this.click$
      .pipe(
        buffer(this.click$.pipe(debounceTime(250))),
        filter(list => list.length === 2),
        map(list => list[1])
      )
      .subscribe(this.doubleClick);
  }
  ngOnDestroy() {
    this.click$.complete();
  }

  onDoubleClick() {
    alert("Double click!");
  }


  constructor() { }
}





