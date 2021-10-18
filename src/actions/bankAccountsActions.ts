import { Dispatch } from "redux";
import * as actionTypes from "./actionTypes/bankAccountsTypes";

export const getBankAccounts = (): Promise<any> =>
  ((dispath: Dispatch) => {
    return (
      fetch("./bankAccounts.json")
        .then((response) => response.json())
        //.then((bankAccountData) => bankAccountData.accounts)
        .then((bankAccountsList: string[]) => {
          dispath({
            type: actionTypes.GET_BANK_ACCOUNTS,
            bankAccountsList
          });
        })
    );
  }) as any;
