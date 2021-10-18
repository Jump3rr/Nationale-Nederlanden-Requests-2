import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes/usersTypes";

export const getUsers = (): Promise<any> =>
  ((dispath: Dispatch) => {
    return fetch("./user.json")
      .then((response) => response.json())
      .then((usersList: string[]) => {
        dispath({
          type: actionTypes.GET_USERS,
          usersList
        });
      });
  }) as any;
