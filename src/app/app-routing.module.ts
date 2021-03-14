import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UserGuardService} from './services/user-guard.service';

const routes = [
  { path: "", component: HomeComponent, canActivate: [UserGuardService]},
  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
