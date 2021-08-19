import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokenLoginComponent } from './broken-login/broken-login.component';
import { DlsLoginComponent } from './dls-login/dls-login.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: "dls-login", component: DlsLoginComponent },
  { path: "broken-login", component: BrokenLoginComponent },
  { path: "success", component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
