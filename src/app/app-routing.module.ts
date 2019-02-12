import { ViewerComponent } from './features/viewer/viewer.component';
import { AdminComponent } from './features/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "admin", component: AdminComponent},
  {path: "viewer", component: ViewerComponent},
  {path: "**", redirectTo: "admin"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
