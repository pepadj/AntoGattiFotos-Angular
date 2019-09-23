import { Directive, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appCallBack]'
})
export class CallBackDirective implements OnDestroy,AfterViewInit {

  is_init: boolean = false;
  called: boolean = false;

  @Input('CallBack') callback: (value:boolean) => any;

  constructor() {  }

  ngAfterViewInit(): void {
    //this.is_init = true;
  }

  ngOnDestroy(): void {
    this.is_init = false;
    this.called = false;
  }

  @Input('callback-condition') set condition(value: any) {    

    if (value == "false") return;       

    if (this.callback) {
      console.log("Value",value);
      console.log(this.callback);

      this.callback(true);
      //this.called = true;
      //this.is_init = false;
    }
    else {
      console.error("callback is null");
    }
  }

}

function doSomething() { console.log("triggenetworking from the directive's parent component when ngFor finishes iterating"); } 
