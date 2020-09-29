import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-agent-profile',
  templateUrl: './add-agent-profile.component.html',
  styleUrls: ['./add-agent-profile.component.scss']
})
export class AddAgentProfileComponent implements OnInit {

  constructor() { }

  elements: any = [];
  headElements = ['Action', 'Employee ID', 'First Name', 'Last Name', 'Hire Date', 'Agent Categories', 'Created By'];

  ngOnInit(): void {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
    }
  }

}
