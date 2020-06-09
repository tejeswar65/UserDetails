import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { DetailslisComponent } from './detailslis/detailslis.component';
import { ConditionComponent } from './condition/condition.component';
import { Condition1Component } from './condition1/condition1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DetailslisComponent,
    ConditionComponent,
    Condition1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


