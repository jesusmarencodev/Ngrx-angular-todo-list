import { createReducer, on } from '@ngrx/store';
import { create, deleteTodo, edit, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Example'),
  new Todo('Example2'),
  new Todo('Example3'),
  new Todo('Example4'),
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, { completed }) =>
    state.map((todo) => ({ ...todo, done: completed }))
  )
);
