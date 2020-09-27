import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard16113032Reducer from '../features/Dashboard16113032/redux/reducers'
import SignUp27113029Reducer from '../features/SignUp27113029/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard16113032: Dashboard16113032Reducer,
SignUp27113029: SignUp27113029Reducer,

});