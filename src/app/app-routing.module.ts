
// -----------------------app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AccueilCmComponent } from './accueil-cm/accueil-cm.component';
import { AccueilAprenantComponent } from './accueil-aprenant/accueil-aprenant.component';
import { AccueilFormateurComponent } from './accueil-formateur/accueil-formateur.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registre', component: ResgisterComponent },
  { path: 'admin', component: AccueilAdminComponent },
  { path: 'formateur', component: AccueilFormateurComponent },
  { path: 'cm', component: AccueilCmComponent },
  { path: 'apprenant', component: AccueilAprenantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
