import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=deeb66a6cc37f8aa3be99855739f5b75&query=' + location

    );
}
}
