import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

declare function InitSwiperAndFacebook();

@Component({
  selector: 'app-notas-completa1',
  templateUrl: './notas-completa1.component.html',
  styleUrls: []
  , encapsulation: ViewEncapsulation.None
})
export class NotasCompleta1Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {

    document.body.classList.add('bodyNotasCompleta1');

    InitSwiperAndFacebook();
  }

  ngOnDestroy() {
    document.body.classList.remove('bodyNotasCompleta1');
  }
}
