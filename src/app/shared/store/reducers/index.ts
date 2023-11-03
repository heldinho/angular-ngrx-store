import { ActionReducerMap } from '@ngrx/store';
import { CartModel } from '../models/cart.model';
import { cartReducer } from './cart.reducer';

export const rootReducer = {};

export interface AppState {
  cart: CartModel;
}

export const reducers: ActionReducerMap<AppState, any> = {
  cart: cartReducer,
};
