import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  None: string = '0';        
  Fiestas: string = '1';            
  BebesYNinos: string = '2';        
  Instituciones: string = '3';           
  Books: string = '4';           
  Familias: string = '5';          
  Personales : string = '6';

  constructor() { }

  ngOnInit() {

  }
}
