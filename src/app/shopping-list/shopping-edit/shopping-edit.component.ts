import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInputElement: ElementRef;

  @ViewChild('amountInput')
  amountInputElement: ElementRef;

  @Output()
  addItem: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddItem() {
    let name = this.nameInputElement.nativeElement.value;
    let amount = parseInt(this.amountInputElement.nativeElement.value);
    this.addItem.emit({name, amount});
  }
}
