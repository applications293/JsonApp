
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
//import  'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private _http: Http) { }

  getUser(){
    return this._http.get('https://conduit.productionready.io/api/profiles/eric');
  }
  /*
  getUser(){
    return this._http.get('https://conduit.productionready.io/api/profiles/eric')
    .subscribeOn((res:Response) => res.json());
  }*/
}

