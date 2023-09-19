import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class MovieApiService {
 constructor(private http: HttpClient) { }
 baseUrl = "https://api.themoviedb.org/3";
 apiKey = "947b658f25f87d2025d6cd2ff3ccdb5a";
 // banner API Data
 bannerApiData(): Observable<any> {
 return
this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}&language=pt-BR`);
 }
} 