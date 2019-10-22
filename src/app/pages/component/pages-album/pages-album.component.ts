import { Component, OnInit, ViewEncapsulation, Input, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ImagenesService, Imagenes } from 'src/app/services/Imagenes.service';

declare function Init();


@Component({
  selector: 'app-pages-album',
  templateUrl: './pages-album.component.html',
  styleUrls: []
  , encapsulation: ViewEncapsulation.None

})

export class PagesAlbumComponent implements OnInit, OnDestroy {

  id: string;
  CollectionsImages: Imagenes;

  // @Input() set ready(isReady: boolean) {

  //   console.log(isReady);
  //   if (isReady)
  //     Init();
  // }

  constructor(private router: Router,
    private route: ActivatedRoute, private _imgService: ImagenesService) {

    this.route.params.subscribe(parametros => {

      this.id = parametros['id'];

    });
  }

  ngOnInit() {    

    var nameFolder:string = this.GetNameFolderForId();

    this.GetImageForFolder("fulls", nameFolder, "jpg").subscribe(data => {
      this.CollectionsImages = data

      console.log(this.CollectionsImages);
    });

    document.body.classList.add('bodyTrabajos');
  }

  ngOnDestroy() {
    document.body.classList.remove('bodyTrabajos');
  }

  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked");
  }

  GetImageForFolder(folder: string, subFolder: string, ext: string): any {
    return this._imgService.getImagenesForSubFolder({ folder$: folder, subfolder$: subFolder, ext$: ext })
  }

  GetNameFolderForId(): string {

    if (this.id === "1") { return "Fiestas"; }
    if (this.id === "2") { return "BebesYNiños"; }
    if (this.id === "3") { return "Instituciones"; }
    if (this.id === "4") { return "Books"; }
    if (this.id === "5") { return "Familias"; }
    if (this.id === "6") { return "Personales"; }    
  }

  InicarJavaScript(value) {
    if (value == true) {
      Init();      
    }
  }
}
