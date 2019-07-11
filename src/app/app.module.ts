import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgModalComponent } from './component/prog-modal/prog-modal.component';
import { ProgColComponent } from './component/prog-col/prog-col.component';
import { TasksColComponent } from './component/tasks-col/tasks-col.component';
import { MainCompComponent } from './component/main-comp/main-comp.component';
import { TaskComponent } from './component/partial/task/task.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgModalComponent,
    ProgColComponent,
    TasksColComponent,
    MainCompComponent,
    TaskComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
