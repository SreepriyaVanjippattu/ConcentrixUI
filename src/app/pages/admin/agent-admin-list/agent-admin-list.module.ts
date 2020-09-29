import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgentAdminListComponent } from "./agent-admin-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';

const routes: Routes = [
  {
    path: '',
    component: AgentAdminListComponent
  }
];

@NgModule({
  declarations: [
    AgentAdminListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    WavesModule,
    TableModule,
    IconsModule
  ]
})
export class AgentAdminListModule {
  static components = [
    AgentAdminListComponent
  ]
 }
