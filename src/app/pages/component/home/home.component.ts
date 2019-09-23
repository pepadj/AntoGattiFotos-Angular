import { Component, OnInit } from '@angular/core';

import { ImagenesService,Imagenes } from 'src/app/services/Imagenes.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  SliderCollectionsImages: Imagenes ;

  constructor(private _imgService: ImagenesService) {     }

  ngOnInit() {

    this.GetImageForFolder("Slider","jpg");
    
  }  

  GetImageForFolder(folder:string , ext:string):any{

  this._imgService.getImagenesForFolder({ folder$: folder, ext$: ext }) .subscribe ( data => {
     this.SliderCollectionsImages = data

     console.log(this.SliderCollectionsImages);
  });
        

    //return this._imgService.getImagenesForFolder("","");
  } 
  
}
