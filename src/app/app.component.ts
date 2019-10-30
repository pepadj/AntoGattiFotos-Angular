import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  , encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit ,OnDestroy{
  routerSubscription: any;

  title = 'Anto Gatti - Fotos';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() { 

    // this.routerSubscription = this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(event => {      
    //   });  
}

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}


