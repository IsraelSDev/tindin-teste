import { Login } from './../../models/login.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public login: string = "";
  public password: string = "";


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  getEmail(e: Event): void {
    e.preventDefault();
    this.login = (<HTMLInputElement>e.target).value;
    console.log(this.login);

  }
  getPassword(e: Event): void {
    e.preventDefault();
    this.password = (<HTMLInputElement>e.target).value;
    console.log(this.password);
  }

  async loginUser(e: Event): Promise<void> {
    e.preventDefault();
    const login = await this.loginService.getLogin(this.login, this.password).then(response => {
      this.loginService.authUser(response);
    })

  }




}