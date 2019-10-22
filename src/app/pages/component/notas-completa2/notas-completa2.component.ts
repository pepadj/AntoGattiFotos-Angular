import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

declare const $: any;
declare function InitGallery();

@Component({
  selector: 'app-notas-completa2',
  templateUrl: './notas-completa2.component.html',
  styleUrls: ['./notas-completa2.component.css']
  , encapsulation: ViewEncapsulation.None
})

export class NotasCompleta2Component implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
    document.body.classList.add('bodyNotasCompleta1');

    InitGallery();
  }

  ngOnDestroy() {
    document.body.classList.remove('bodyNotasCompleta1');
  }  
}
