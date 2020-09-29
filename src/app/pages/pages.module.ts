import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from "./pages.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'AgentAdminList',
      loadChildren: () => import('./admin/agent-admin-list/agent-admin-list.module')
        .then(m => m.AgentAdminListModule)
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [PagesComponent],
  exports: [RouterModule]
})
export class PagesModule {

}
