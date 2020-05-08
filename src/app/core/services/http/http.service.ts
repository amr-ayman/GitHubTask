import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import {AppConfig} from '../../../../assets/configs/configs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private baseUrl = AppConfig.baseUrl;

  constructor(private http: HttpClient, private router: Router) {
  }

  get(url) {
    return this.http.get<any>(this.baseUrl + url).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        return this.handleHttpError(error);
      })
    );
  }

  handleHttpError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.message);
    } else {
      if (error.status === 404) {
        console.error('Not Found');
      } else {
        console.error(
          `Backend returned code ${error.status}, body was: ${error.error}`);
      }
    }
    return throwError(error);
  }
}
