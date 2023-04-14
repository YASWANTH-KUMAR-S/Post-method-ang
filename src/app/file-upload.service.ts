import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      const formData = new FormData();
      formData.append('file', file);
      this.http.post<any>('//enter you url yo bro , happy hacking yo bitch from - jiraiya Yash', formData)
        .subscribe(
          response => {
            observer.next(response);
            observer.complete();
          },
          (error: HttpErrorResponse) => {
            observer.error(error);
          }
        );
    });
  }
}
