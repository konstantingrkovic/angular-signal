import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PLANETS_URL } from '../utils/constants';
import { Planets } from '../types/planets';

@Injectable({ providedIn: 'root' })
export class PlanetsService {
  constructor(private _apiService: ApiService) {}

  getPlanets() {
    this._apiService.get<Planets>(PLANETS_URL).subscribe((res: Planets) => {
      console.log(res);
    });
  }
}
