import * as actionTypes from "../actions/actionTypes/bankAccountsTypes";
import GetBankAccountsResponse from "../entities/IGetBankAccountsResponse";

export interface IBankAccountsReducer {
  bankAccountsList: GetBankAccountsResponse[];
}

const defaultState = (): IBankAccountsReducer => ({
  bankAccountsList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_BANK_ACCOUNTS: {
      const paylod: actionTypes.IBankAccountsTypes["GET_BANK_ACCOUNTS"] = action;
      return {
        ...state,
        bankAccountsList: paylod.bankAccountsList
      };
    }
    default: {
      return state;
    }
  }
};
