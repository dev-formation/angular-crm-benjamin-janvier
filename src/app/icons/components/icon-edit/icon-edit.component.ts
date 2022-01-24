import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  template: `<fa-icon [icon]="iconName"></fa-icon>`,
  styleUrls: ['./icon-edit.component.scss']
})
export class IconEditComponent implements OnInit {
  public iconName = faEdit;
  constructor() { }

  ngOnInit(): void {
  }

}
