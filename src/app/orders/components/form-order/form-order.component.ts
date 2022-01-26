import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  public states = Object.values(StateOrder);
  
  // communication parent(page-add-order ou page-edit-order) -> enfant (ce component)
  @Input() init!: Order; 

  // communication enfant (ce component) -> parent (page-add-order ou page-edit-order)
  @Output() submitted = new EventEmitter<Order>(); 
  
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta, Validators.required],
      client: [this.init.client, [Validators.required, Validators.minLength(2)]],
      comment: [this.init.comment],
      id: [this.init.id]
    })
  }

  public onSubmit(){
    console.log(this.form);
    this.submitted.emit(this.form.value);
  }
}

