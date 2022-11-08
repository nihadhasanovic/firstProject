import { Injectable } from '@angular/core';

export interface CarDetails {
  name: string;
  id: string;
  model: string;
  regDate: string;
  servDate: string;
  cost: string
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  private _carDetails: CarDetails [] =[
    {
      name: 'golf 4',
      id: '133-T-234',
      model: 'putnicko',
      regDate:'22.12.2022.',
      servDate:'30.12.2022.',
      cost:'3.650,00'
    },
    {
      name: 'BMW M4',
      id: '143-E-264',
      model: 'coupe',
      regDate:'22.11.2022.',
      servDate:'31.11.2022.',
      cost:'33.650,00'
    },
    {
      name: 'AUDI RS7',
      id: '237-F-861',
      model: 'grand coupe',
      regDate:'02.02.2001.',
      servDate:'01.01.2001.',
      cost:'3,000.00'
    },
    {
      name: 'AUDI RS6',
      id: '137-G-761',
      model: 'terensko',
      regDate:'11.02.2023.',
      servDate:'01.01.2023.',
      cost:'35,000.00'
    },
    {
      name: 'AUDI RS4',
      id: '237-F-231',
      model: 'grand coupe',
      regDate:'02.02.2001.',
      servDate:'01.01.2001.',
      cost:'37,000.00'
    },
    {
      name: 'AUDI RS7',
      id: '237-F-861',
      model: 'grand coupe',
      regDate:'02.02.2001.',
      servDate:'01.01.2001.',
      cost:'3,000.00'
    },
    {
      name: 'AUDI RS5',
      id: '177-F-861',
      model: 'grand coupe',
      regDate:'02.02.2001.',
      servDate:'01.01.2001.',
      cost:'25,000.00'
    }
  ]



  get CarDetails(): CarDetails[] {
    return this._carDetails;
  }
  set carDetails(value: CarDetails[]) {
    this._carDetails = value;
  }


}
