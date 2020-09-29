import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgentAdminListComponent } from "./agent-admin-list.component";

const routes: Routes = [
  {
    path: '',
    component: AgentAdminListComponent,
    data: { breadcrumb: 'Agent Admin List' }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AgentAdminListModule { }
