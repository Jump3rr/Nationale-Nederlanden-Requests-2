import * as actionTypes from "../actions/actionTypes/usersTypes";
import GetUserResponse from "../entities/IGetUserResponse";

export interface IUsersReducer {
  usersList: GetUserResponse[];
}

const defaultState = (): IUsersReducer => ({
  usersList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_USERS: {
      const paylod: actionTypes.IUserTypes["GET_USERS"] = action;
      return {
        ...state,
        usersList: paylod.usersList
      };
    }
    default: {
      return state;
    }
  }
};
