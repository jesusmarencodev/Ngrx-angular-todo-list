import { createAction, props } from '@ngrx/store';

export type  validFilters = 'alls' | 'completed' | 'pending'

export const setFilter = createAction(
  '[Filter] set filter',
  props<{ filter: validFilters }>()
);
