import GetUserResponse from "../../entities/IGetUserResponse";

export const GET_USERS = "GET_USERS";

export interface IUserTypes {
  GET_USERS: {
    usersList: GetUserResponse[];
  };
}
