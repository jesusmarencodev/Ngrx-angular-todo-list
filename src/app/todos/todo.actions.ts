import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] create todo',
  props<{ text: string }>()
);


export const toggle = createAction(
  '[TODO] toggle todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit todo',
  props<{ id: number, text:string }>()
);

export const deleteTodo = createAction(
  '[TODO] delete todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] toggleAll todo',
  props<{ completed: boolean }>()
);

export const cleanUpTodosCompleted = createAction('[TODO] cleanUpTodosCompleted todos',)
