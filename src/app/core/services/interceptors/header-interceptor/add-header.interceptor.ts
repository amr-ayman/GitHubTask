import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jsonReq: HttpRequest<any> = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/vnd.github.v3+json'
      }
    });
    return next.handle(jsonReq);
  }
}
