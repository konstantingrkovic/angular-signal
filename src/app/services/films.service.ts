import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { FILMS_URL } from '../utils/constants';
import { Films } from '../types/films';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  constructor(private _apiService: ApiService) {}

  getFilms() {
    this._apiService.get<Films>(FILMS_URL).subscribe((res: Films) => {
      console.log(res);
    });
  }
}
