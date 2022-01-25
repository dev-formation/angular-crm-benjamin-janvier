import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: PageSignInComponent },
  { path: 'signup', component: PageSignUpComponent },
  { path: 'reset', component: PageResetPasswordComponent },
  { path: 'forgot', component: PageForgotPasswordComponent },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)},
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
