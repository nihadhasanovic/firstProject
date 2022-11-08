import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let myEmail = document.getElementById("email") as HTMLInputElement;
    let myPass = document.getElementById("password") as HTMLInputElement;
    if (myEmail.value === "nihad@ba" && myPass.value === "1234") {
      this.router.navigate(['./home']);
    }
  }
}
