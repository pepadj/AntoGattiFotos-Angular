import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';


declare function InitSwiperAndFacebook();
declare function InitNotas();

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
  , encapsulation: ViewEncapsulation.None
})
export class NotasComponent implements OnInit, OnDestroy {

  anio: string;

  constructor() {
    var year = new Date();

    this.anio = year.getFullYear().toString();
  }

  ngOnInit() {

    document.body.classList.add('bodyNotas');

    InitSwiperAndFacebook();
    
    InitNotas();
  }

  ngOnDestroy() {
    document.body.classList.remove('bodyNotas');
  }
}
