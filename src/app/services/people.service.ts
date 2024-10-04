import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PEOPLE_URL } from '../utils/constants';
import { People } from '../types/people';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  constructor(private _apiService: ApiService) {}

  getPeople() {
    this._apiService.get<People>(PEOPLE_URL).subscribe((res: People) => {
      console.log(res);
    });
  }
}
