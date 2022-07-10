
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public login: string = "";
  public password: string = "";
  public messageLogin: string = '';
  public isLogado: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    if (this.loginService.getUser()) {
      this.isLogado = true;
      window.location.href = "/home";
    }
  }

  getEmail(e: Event): void {
    e.preventDefault();
    this.login = (<HTMLInputElement>e.target).value.trim();
  }
  getPassword(e: Event): void {
    e.preventDefault();
    this.password = (<HTMLInputElement>e.target).value.trim();
  }

  async loginUser(e: Event): Promise<void> {
    e.preventDefault();
    const login = await this.loginService.getLogin(this.login, this.password).then(response => {
      if (typeof (response) == "object") {
        alert("Login realizado com sucesso!");
        this.isLogado = true;
        this.loginService.authUser(response)
        window.location.href = "/home";
        this.messageLogin = "Redirecionando...";
      }
      this.messageLogin = response.toString();
    }).catch(error => {
      this.isLogado = false;
      this.messageLogin = error.toString();
    });
  }
}