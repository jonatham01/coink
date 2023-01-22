import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';
import { Character } from '../models/Character-model';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(
    private http: HttpClient
  ) { }

  getChracters(inicial:number=0,final:number=6){
    return this.http.get<Character>('https://rickandmortyapi.com/api/character/').pipe(
      retry(3),
      map(
        data=>{
          return {info:data.info,
            results:data.results.filter(
              x=> x.id<final && x.id>inicial
            )
          };
        }
      )
    )
  }

  getBy( name?: string, type?: string){
    let params = new HttpParams();
    if (name && type != null) {
      params = params.set('name', name);
      params = params.set('type', type);
    }
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character`, { params })
  }
}
