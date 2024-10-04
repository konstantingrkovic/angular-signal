import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { STARSHIPS_URL } from '../utils/constants';
import { Starships } from '../types/starships';

@Injectable({ providedIn: 'root' })
export class StarshipsService {
  constructor(private _apiService: ApiService) {}

  getStarships() {
    this._apiService
      .get<Starships>(STARSHIPS_URL)
      .subscribe((res: Starships) => {
        console.log(res);
      });
  }
}
