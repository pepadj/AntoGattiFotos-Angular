import { Injectable } from '@angular/core';
// https://angular.io/guide/http#adding-headers IMPORTANTE!!!
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators';

export interface Imagenes {
  Path: string; 
  Image: string; 
};

@Injectable()
export class ImagenesService {

  apiUrl = 'http://localhost:3000/imagen/';
 
  constructor( private http: HttpClient) { }  

    getImagenesForFolder ({ folder$, ext$ }: { folder$: string; ext$: string; }){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json', 
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET'
        })
      };

      
      var url = `${ this.apiUrl }${ folder$ }/${ext$}`;
     
      return this.http.get<Imagenes>( url )
      .pipe(
        map( res => { return res; }));
    } 
    
    getImagenesForSubFolder ({ folder$,subfolder$, ext$ }: { folder$: string;subfolder$: string; ext$: string; }){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json', 
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET'
        })
      };

      
      var url = `${ this.apiUrl }${ folder$ }/${ subfolder$ }/${ext$}`;
     
      return this.http.get<Imagenes>( url )
      .pipe(
        map( res => { return res; }));
    } 
}

