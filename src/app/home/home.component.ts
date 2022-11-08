import { Component, OnInit } from '@angular/core';
import {CarService, CarDetails, Headers} from "../car.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  carNew!: CarDetails[]
  headers!: Headers[]
  rws: any
  obj:any

  isClicked:boolean=true;


  constructor(public car: CarService) { }

  ngOnInit(): void {
    this.carNew=this.car.CarDetails;
    this.headers=this.car.headers;
  }

  addVehicle(){

  }


  editRow(){

  }

  deleteRow(){

  }

  dodatniFilteri() {
    this.obj = document.getElementById('body');
    this.rws = this.obj.getElementsByTagName('TR');

    if(this.isClicked){
      this.rws[5].style.display = "none";
      this.rws[6].style.display = "none";
      this.isClicked=false;
    }
    else{
      this.rws[5].style.display = "";
      this.rws[6].style.display = "";
      this.isClicked=true;
    }
  }

  licitacija(){

  }

  vozila(){

  }
}
