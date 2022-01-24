import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  template: `<fa-icon [icon]="iconName"></fa-icon>`,
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent implements OnInit {
  public iconName = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
