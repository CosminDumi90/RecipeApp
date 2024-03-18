import { User } from '../user.model';
import * as AllAuthActions from './auth.actions';

export interface State {
  stateUser: User;
}
const initialState: State = { stateUser: null };
export function authReducer(
  state = initialState,
  action: AllAuthActions.AuthActions
) {
  console.log(state);
  
  switch (action.type) {
    case AllAuthActions.LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        stateUser: user,
      };
    case AllAuthActions.LOGOUT:
      return { ...state, stateUser: null };
    default:
      return state;
  }
}
