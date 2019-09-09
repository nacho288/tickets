import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConectionsService } from './../../services/conections.service';
import { LoginDataService } from './../../services/login-data.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
})
export class LoginScreenComponent implements OnInit {

  nombre: string;
  password: string;
  loading: boolean = false

  constructor( public conections: ConectionsService, public loginData :LoginDataService) { }

  ngOnInit() {
    
  }
  
  enviarLogin = () => {

    if (this.nombre && this.password) {
      this.conections.login(this.nombre, this.password);
    }
    
  }
  

}
