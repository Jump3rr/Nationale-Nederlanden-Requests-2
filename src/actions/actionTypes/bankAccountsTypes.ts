import GetBankAccountsResponse from "../../entities/IGetBankAccountsResponse";

export const GET_BANK_ACCOUNTS = "GET_BANK_ACCOUNTS";

export interface IBankAccountsTypes {
  GET_BANK_ACCOUNTS: {
    bankAccountsList: GetBankAccountsResponse[];
  };
}
