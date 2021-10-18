import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../actions/usersActions";
import { getBankAccounts } from "../actions/bankAccountsActions";
import { useSelector } from "react-redux";
import { IState } from "../reducers";
import { IUsersReducer } from "../reducers/usersReducer";
import UserDetailsViewProps from "../entities/UserDetailsViewProps";
import { IBankAccountsReducer } from "../reducers/bankAccountsReducer";
import ReactPaginate from "react-paginate";

type GetUsers = ReturnType<typeof getUsers>;
type GetBankAccounts = ReturnType<typeof getBankAccounts>;

export const UserDetailsView: FC<UserDetailsViewProps> = ({ pageNo }) => {
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
  const [pageNumber, setPageNumber] = useState(pageNo - 1);

  const accountsPerPage = 1;
  const pagesVisited = pageNumber * accountsPerPage;
  const PageCount = Math.ceil(usersList?.length / accountsPerPage);

  const displayUsers = () =>
    usersList.slice(pagesVisited, pagesVisited + accountsPerPage).map((el) => {
      return (
        <span>
          <div>{el.email}</div>
          <div></div>
        </span>
      );
    });
  const ChangePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {usersList.length > 0 && bankAccountsList.accounts?.length > 0 && (
        <span>
          {displayUsers()}
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={PageCount}
            onPageChange={ChangePage}
            containerClassName={"paginationBttns"}
            previousClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
          />
        </span>
      )}
    </div>
  );
};
