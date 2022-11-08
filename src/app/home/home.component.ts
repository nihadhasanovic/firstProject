import { Component, OnInit } from '@angular/core';
import {CarService, CarDetails} from "../car.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  carNew!: CarDetails[]
  headers = ['Naziv vozila', 'Registracija', 'Tip vozila', 'Registriran do', 'Naredni servis', 'Ukupni trošak'];


  constructor(public car: CarService) { }

  ngOnInit(): void {
    this.carNew=this.car.CarDetails;
  }

  addVehicle(){

  }

  dodatniFilteri(){

  }
}
