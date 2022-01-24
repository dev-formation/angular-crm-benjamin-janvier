import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-delete',
  template: `<fa-icon [icon]="iconName"></fa-icon>`,
  styleUrls: ['./icon-delete.component.scss']
})
export class IconDeleteComponent implements OnInit {
  public iconName = faTrash;
  constructor() { }

  ngOnInit(): void {
  }

}
