import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = ''
  invalidLogin = false
  constructor(private router:Router, private loginservice: AuthenticationService) { }
// username:string;
// password:string;

//   ngOnInit() {
//   }
//   login() : void {
//     if(this.username == 'admin' && this.password == 'admin'){
//      this.router.navigate(["category"]);
//     }else {
//       alert("Invalid credentials");
//     }
//   }
ngOnInit() {
}

checkLogin() {
  if (this.loginservice.authenticate(this.username, this.password)
  ) {
    this.router.navigate(['category'])
    this.invalidLogin = false
  } else
    this.invalidLogin = true
}

  }
