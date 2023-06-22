import {ActionReducerMap} from "@ngrx/store";
import {counterReducer} from "./app.reducer";

export interface State {
  counter: number;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
}
