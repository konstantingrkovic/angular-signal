import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SPECIES_URL } from '../utils/constants';
import { Species } from '../types/species';

@Injectable({ providedIn: 'root' })
export class SpeciesService {
  constructor(private _apiService: ApiService) {}

  getSpecies() {
    this._apiService.get<Species>(SPECIES_URL).subscribe((res: Species) => {
      console.log(res);
    });
  }
}
