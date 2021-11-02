import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService extends HttpService {

  constructor(public http: HttpClient) {
    super(http);
  }

  public async crearUsuario(url:string){
    try {
      return this.HttpGet(url).pipe(
        map((response: any) => {
          return response;
        })
      );    
    } catch (error) { 
      throw error;
    }
  }}
