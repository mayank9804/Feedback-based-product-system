import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";



@Injectable()
export class DataService{
    
    BASE_URL = "http://172.18.17.160:5000";
    constructor(private _http: HttpClient) { }

    
    public getData(){
        return this._http.get(`${this.BASE_URL}/getdata`).pipe(
            catchError(err => throwError(err))
        )
    }

    public selectproduct(xx){
        let x = {
            id: xx["id"]
        };
        console.log(x);
        
        return this._http.post(`${this.BASE_URL}/select`,x).pipe(
            catchError(err => throwError(err))
        );
    }

}