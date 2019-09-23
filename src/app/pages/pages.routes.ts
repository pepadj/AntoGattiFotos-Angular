import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { PagesAlbumComponent } from './component/pages-album/pages-album.component';

const pagesRoutes: Routes = [    
    {
        path: '',
        component: PagesComponent,
        //canActivate: [ LoginGuardGuard ],
        //loadChildren: './pages/pages.module#PagesModule'
    },{
        path: 'Album/:id',
        component: PagesAlbumComponent,
        //canActivate: [ LoginGuardGuard ],
        //loadChildren: './pages/pages.module#PagesModule'
    }
    //,{ path: '**', component: NopagefoundComponent }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
