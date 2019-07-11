import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainCompComponent } from './component/main-comp/main-comp.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'home' ,component:HomeComponent},
  {path:'home/:prog/:taskId',component:MainCompComponent},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
