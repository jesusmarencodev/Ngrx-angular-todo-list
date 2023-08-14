import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { validFilters } from 'src/app/filter/filter.actions';
import { setFilter } from '../../filter/filter.actions';
import { cleanUpTodosCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: validFilters;
  filters: validFilters[] = ['alls', 'pending', 'completed'];
  pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.pending = state.todos.filter((todo) => !todo.done).length ?? 0;
    });
  }

  changeFilter(filter: validFilters) {
    this.store.dispatch(setFilter({ filter }));
  }
  cleanUpCompleted(){
    this.store.dispatch(cleanUpTodosCompleted())
  }
}
