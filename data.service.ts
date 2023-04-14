import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'Romba Santhosam paaa';

  constructor(private http: HttpClient) { }

  sendDropdownValue(selectedValue: string) {
    
    const url = `${this.apiUrl}/dropdown`;
    const payload = { value: selectedValue };
    return this.http.post(url, payload);
  }
  
}
