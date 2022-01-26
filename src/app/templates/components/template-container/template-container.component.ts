import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent implements OnInit {
  @Input() public title!: string; 

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('****** On Changes');
  }

  ngDoCheck(): void {
    console.log('****** Si On Changes ne detecte pas le changement moi si ! ');
  }

}
