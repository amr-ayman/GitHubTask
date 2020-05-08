import { Injectable } from '@angular/core';
import {HttpService} from '../../../../core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private httpService: HttpService) { }

  getRepositories(url) {
    return this.httpService.get(url);
  }
}
