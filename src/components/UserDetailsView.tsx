import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../actions/usersActions";
import { getBankAccounts } from "../actions/bankAccountsActions";
import { useSelector } from "react-redux";
import { IState } from "../reducers";
import { IUsersReducer } from "../reducers/usersReducer";
import UserDetailsViewProps from "../entities/UserDetailsViewProps";
import { IBankAccountsReducer } from "../reducers/bankAccountsReducer";

type GetUsers = ReturnType<typeof getUsers>;
type GetBankAccounts = ReturnType<typeof getBankAccounts>;

export const UserDetailsView: FC = (props: UserDetailsViewProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetBankAccounts>(getBankAccounts());
  }, []);

  const { usersList, bankAccountsList } = useSelector<
    IState,
    IUsersReducer & IBankAccountsReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.bankAccounts
  }));

  return (
    <div>
      {usersList.length > 0 && bankAccountsList.accounts?.length > 0 && (
        <div>
          <h2>Users:</h2>
          {usersList.map((el) => {
            return <div key={el.email}>{el.email}</div>;
          })}
          <h2>Bank accounts balance:</h2>
          {bankAccountsList.accounts?.map((el: { balance: number }) => {
            return <div key={el.balance}>{el.balance}</div>;
          })}
        </div>
      )}
    </div>
  );
};
