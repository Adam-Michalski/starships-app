import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StarshipService {

  constructor(private http: HttpClient) { }

  public getStarshipSuggestions(filterText: string): Observable<any> {
    return this.http.get<any>('https://swapi.co/api/starships/?search=' + filterText);
  }
}
