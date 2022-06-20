import { createSelector } from 'reselect';

export const selectUsers = (state) => state.users;

export const usersSelector = createSelector([selectUsers], (user) => user.list);

export const selectedUserSelector = createSelector([selectUsers], (user) => user.selectedUser);

export const currentPageSelector = createSelector([selectUsers], (user) => user.currentPage);

export const isLoadingSelector = createSelector([selectUsers], (user) => user.isLoading);

export const isErrorSelector = createSelector([selectUsers], (user) => user.error.length > 0);
