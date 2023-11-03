import { ActionReducerMap } from '@ngrx/store';
import { CartModel } from '../models/cart.model';
import { cartReducer } from './cart.reducer';
import { Tutorial } from '../models/tutorial.model';
import { tutorialReducer } from './tutorial.reducer';

export const rootReducer = {};

export interface AppState {
  cart: CartModel;
  tutorial: Tutorial[];
}

export const reducers: ActionReducerMap<AppState, any> = {
  cart: cartReducer,
  tutorial: tutorialReducer,
};
