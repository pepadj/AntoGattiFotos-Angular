import { Component, OnInit, ViewEncapsulation, Input, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ImagenesService, Imagenes } from 'src/app/services/Imagenes.service';

declare function Init();

@Component({
  selector: 'app-pages-album',
  templateUrl: './pages-album.component.html',
  styleUrls: ['../../../../assets/css/PopupGallery/css/main.css']
    ,encapsulation: ViewEncapsulation.Emulated
    
})

export class PagesAlbumComponent implements OnInit {

  id: string;
  CollectionsImages: Imagenes;

  @Input() set ready(isReady: boolean) { 

    console.log(isReady);
    if (isReady) 
    Init(); 
  } 

  constructor(private router: Router,
    private route: ActivatedRoute, private _imgService: ImagenesService) {

    this.route.params.subscribe(parametros => {

      this.id = parametros['id'];

    });
  }

  ngOnInit() {

    console.log(this.id);

    if (this.id === "1") {

      this.GetImageForFolder("fulls", "BebesYNiños", "jpg").subscribe(data => {
        this.CollectionsImages = data

        console.log(this.CollectionsImages);
      });
    }
  }

  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked");
  }

  GetImageForFolder(folder: string, subFolder: string, ext: string): any {
    return this._imgService.getImagenesForSubFolder({ folder$: folder, subfolder$: subFolder, ext$: ext })
  }

  InicarJavaScript(value) {
    if(value==true){
      Init();

      //console.log("InicarJavaScript",value);
    }
  }

  
}
