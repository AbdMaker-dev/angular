import { Component, OnInit } from '@angular/core';
import { AuthentificateurService } from '../services/authentificateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  password:string;
  username:string;
  usernameIsvalide : boolean;
  passwordIsvalide : boolean;

  constructor(private authentificateurService :AuthentificateurService, private router: Router ) { }

  ngOnInit(): void {}

  onSubmit(){
    this.usernameIsvalide = true;
    this.passwordIsvalide = true;
    if (!this.username) {
      return this.usernameIsvalide = false;
    }
    if (!this.password) {
      return this.passwordIsvalide = false;
    }
    // ------------------------- 'aliounebadaradiouf7','1234-uao'  'admin1','password' 'formateur1','password' ------------------------------------------------------
        this.authentificateurService.login(this.username,this.password).subscribe(
          data => {
            // console.log(data);
            var {roles} = JSON.parse(localStorage.getItem('auth_meta'));
             if (roles.includes("ROLE_APPRENANT")) {
                this.authentificateurService.getUser().subscribe(
                  datas => {
                    var {attente} = JSON.parse(JSON.stringify(datas));
                    if (attente) {
                      // redirection vers la formulaire d'inscriptio
                      this.router.navigateByUrl('/registre');
                    }else{
                      // redirection vers la page accueil apprenant
                      this.router.navigateByUrl('/apprenant');
                    }
                  },
                  err => {
                    console.log(err);
                  }
                );
             }else if (roles.includes("ROLE_CM")){
               // redirection vers la page accueil cm
               this.router.navigateByUrl('/cm');
             }else if (roles.includes("ROLE_FORMATEUR")){
              // redirection vers la page accueil FORMATEUR
              this.router.navigateByUrl('/formateur');
            }else if (roles.includes("ROLE_ADMIN")){
              // redirection vers la page accueil ADMIN
              this.router.navigateByUrl('/admin');
            }else{
              // redirection vers la page 404
              this.router.navigateByUrl('');
            }
          },
          err => {
            console.log(err);
          }
        );
    // --------------------------------------------------------------------------
  }

}
