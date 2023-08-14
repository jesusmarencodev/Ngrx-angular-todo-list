import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputSelect') inputSelect: ElementRef;

  checkDone: FormControl;
  txtInput: FormControl;

  flatEdit: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkDone = new FormControl(this.todo.done);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.checkDone.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  edit() {
    this.flatEdit = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.inputSelect.nativeElement.select();
    }, 1);
  }

  completedEdition() {
    this.flatEdit = false;
    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.text) return;
    this.store.dispatch(
      actions.edit({ id: this.todo.id, text: this.txtInput.value })
    );
  }

  delete() {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }
}
