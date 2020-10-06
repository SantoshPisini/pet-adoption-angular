import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthBaseComponent } from './Authentication/auth-base/auth-base.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { NoAccessComponent } from './Error/no-access/no-access.component';
import { NotFoundComponent } from './Error/not-found/not-found.component';
import { ServerErrorComponent } from './Error/server-error/server-error.component';


const routes: Routes = [
  { path: 'noaccess', component: NoAccessComponent },
  { path: 'servererror', component: ServerErrorComponent },
  {
    path: 'auth',
    component: AuthBaseComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
