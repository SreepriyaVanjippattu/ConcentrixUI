import { Component, OnInit } from '@angular/core';
import { AddAgentProfileComponent } from '../add-agent-profile/add-agent-profile.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
  selector: 'app-agent-admin-list',
  templateUrl: './agent-admin-list.component.html',
  styleUrls: ['./agent-admin-list.component.scss']
})
export class AgentAdminListComponent implements OnInit {

  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  elements: any = [];
  headElements = ['Action', 'Employee ID', 'First Name', 'Last Name', 'Hire Date', 'Agent Categories', 'Created By'];

  ngOnInit(): void {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
    }
  }

  openModal() {
    this.modalRef = this.modalService.show(AddAgentProfileComponent)
  }
}
