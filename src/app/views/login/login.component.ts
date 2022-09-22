import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  
  userModel = new User()
  mensagem = ""

  receberDados() {
    this.loginService.login(this.userModel).subscribe( (response) => {
      this.mensagem = "Bem vindo " + response.body.user.nome + "!"
    }, (responseErro) => {
      console.log(responseErro); 
      this.mensagem = responseErro.error
    } )
  }
}
