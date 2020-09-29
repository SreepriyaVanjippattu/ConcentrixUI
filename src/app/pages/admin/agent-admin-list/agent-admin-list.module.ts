import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgentAdminListComponent } from "./agent-admin-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WavesModule, TableModule, IconsModule, ModalModule, InputsModule } from 'angular-bootstrap-md';
import { DpDatePickerModule } from 'ng2-date-picker';

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
    IconsModule,
    ModalModule,
    InputsModule,
    DpDatePickerModule
  ]
})
export class AgentAdminListModule {
  static components = [
    AgentAdminListComponent
  ]
}
