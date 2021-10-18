export default interface GetBankAccountsResponse {
  accounts: Array<{
    // Typ number uzyty dla uproszczenia zadania
    balance: number;
  }>;
}
