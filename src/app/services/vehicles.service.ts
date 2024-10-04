import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { VEHICLES_URL } from '../utils/constants';
import { Vehicles } from '../types/vehicles';

@Injectable({ providedIn: 'root' })
export class VehiclesService {
  constructor(private _apiService: ApiService) {}

  getVehicles() {
    this._apiService.get<Vehicles>(VEHICLES_URL).subscribe((res: Vehicles) => {
      console.log(res);
    });
  }
}
