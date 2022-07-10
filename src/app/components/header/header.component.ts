import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  providers: [LoginService]
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public isLoged: boolean = false;
  public router: string = 'login';

  ngOnInit(): void {
    if (this.loginService.getUser()) {
      this.isLoged = true
      this.router = ''
    } else {
      this.isLoged = false;

    }
  }
  logout(): void {
    alert("Você deslogou com sucesso!")
    this.loginService.logout();
    this.router = 'login';
  }

}
