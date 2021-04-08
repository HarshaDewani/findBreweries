import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BreweriesServices {
    constructor(private http: HttpClient) {
    }

    getJSON(url: string): Observable<any> {
        return this.http.get(url);
    }
}
