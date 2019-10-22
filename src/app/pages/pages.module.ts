import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PAGES_ROUTES } from './pages.routes';

//Component
import { PagesComponent } from './pages.component';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services.component';
import { WorksComponent } from './component/works/works.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';

import { PagesAlbumComponent } from './component/pages-album/pages-album.component';

import { NotasComponent } from './component/notas/notas.component';
import { NotasCompleta1Component } from './component/notas-completa1/notas-completa1.component';
import { NotasCompleta2Component } from './component/notas-completa2/notas-completa2.component';

//Service
import { ImagenesService } from '../services/Imagenes.service';
import { CallBackDirective } from '../Directives/call-back.directive';

@NgModule({
    declarations: [
        PagesComponent,        
        AboutComponent,
        NavbarComponent,
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        WorksComponent,
        ContactComponent,
        FooterComponent,
        PagesAlbumComponent,
        CallBackDirective,
        NotasComponent,
        NotasCompleta1Component,
        NotasCompleta2Component        
    ],
    providers: [
        ImagenesService
    ],
    exports: [                               
    ],
    imports: [        
        PAGES_ROUTES,
        HttpClientModule,
        CommonModule        
    ]
})
export class PagesModule { }
