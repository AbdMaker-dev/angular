import { Component, OnInit } from '@angular/core';
import { AuthentificateurService } from '../services/authentificateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent implements OnInit {
  usernameIsvalide : boolean;
  passwordIsvalide : boolean;
  nomIsvalide : boolean;
  prenomIsvalide : boolean;
  user : any = {};

  constructor(private authentificateurService :AuthentificateurService,private router: Router) { }

  ngOnInit(): void {}

  onSubmit(){
    // console.log(this.user);
    this.usernameIsvalide = true;
    this.passwordIsvalide = true;
    this.nomIsvalide = true;
    this.prenomIsvalide = true;
    
    if (!this.user.nom) {
     return this.nomIsvalide = false;
    }
    if (!this.user.prenom) {
      return this.prenomIsvalide = false;
    }
    if (!this.user.username) {
      return this.usernameIsvalide = false;
    }
    if (!this.user.password) {
      return this.passwordIsvalide = false;
    }

    this.authentificateurService.updateApprenant(this.user).subscribe(
      data => {
        // console.log(data);
        var {response} = JSON.parse(JSON.stringify(data));
        if (response == "succes"){
          this.authentificateurService.login(this.user.username,this.user.password).subscribe(
            data=>{
              this.router.navigateByUrl('/apprenant');
            },
            error=>{

            }
          );
        }
      },
      err=>{
      }
      );
  }
}

export class User {
  nom : string;
  prenom : string;
  username : string;
  password : string;
}
