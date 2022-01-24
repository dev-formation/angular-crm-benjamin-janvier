import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  template: `<fa-icon [icon]="iconName"></fa-icon>`,
  styleUrls: ['./icon-nav.component.scss']
})
export class IconNavComponent implements OnInit {
  public iconName = faBars;
  constructor() { }

  ngOnInit(): void {
  }

}
