import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MyAccountComponent } from './common/my-account/my-account.component';

const routes: Routes = [

  {
 path:'login',
 component:LoginComponent
  },
  {
    path:'my_account',
    component:MyAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
