import { combineReducers } from "redux";

import users, { IUsersReducer } from "./usersReducer";
import bankAccounts, { IBankAccountsReducer } from "./bankAccountsReducer";

export default combineReducers({
  users,
  bankAccounts
});

export interface IState {
  users: IUsersReducer;
  bankAccounts: IBankAccountsReducer;
}
