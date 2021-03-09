import {ADD_TRANSACTION, DELETE_TRANSACTION,
  ADD_TRANSACTION1, DELETE_TRANSACTION1,
  ADD_TRANSACTION2, DELETE_TRANSACTION2,
  ADD_TRANSACTION3, DELETE_TRANSACTION3,
  ADD_TRANSACTION4, DELETE_TRANSACTION4,
  ADD_TRANSACTION5, DELETE_TRANSACTION5,
  ADD_TRANSACTION6, DELETE_TRANSACTION6,
  ADD_TRANSACTION7, DELETE_TRANSACTION7,
  ADD_TRANSACTIONHOME, DELETE_TRANSACTIONHOME,
  ADD_TRANSACTIONCREDITMONEY, DELETE_TRANSACTIONCREDITMONEY,
} from './types';

export const addTransaction = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION, payload: newTransaction});
};

export const deleteTransaction = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION, payload: id});
};
// *********************************************************************
export const addTransactionHome = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTIONHOME, payload: newTransaction});
};

export const deleteTransactionHome = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTIONHOME, payload: id});
};
// *********************************************************************
export const addTransactionBank = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION1, payload: newTransaction});
};

export const deleteTransactionBank = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION1, payload: id});
};
// *********************************************************************
export const addTransactionCredit = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION2, payload: newTransaction});
};

export const deleteTransactionCredit = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION2, payload: id});
};
// *********************************************************************
export const addTransactionDebt = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION3, payload: newTransaction});
};

export const deleteTransactionDebt = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION3, payload: id});
};
// *********************************************************************
export const addTransactionDebt1 = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION4, payload: newTransaction});
};

export const deleteTransactionDebt1 = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION4, payload: id});
};
// *********************************************************************
export const addTransactionCredit1 = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION5, payload: newTransaction});
};

export const deleteTransactionCredit1 = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION5, payload: id});
};
// *********************************************************************
export const addTransactionCreditmoney = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTIONCREDITMONEY, payload: newTransaction});
};

export const deleteTransactionCreditmoney = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTIONCREDITMONEY, payload: id});
};
// *********************************************************************
export const addTransactionAddbank = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION6, payload: newTransaction});
};

export const deleteTransactionAddbank = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION6, payload: id});
};
// *********************************************************************
export const addTransactionDeletebank = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION7, payload: newTransaction});
};

export const deleteTransactionDeletebank = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION7, payload: id});
};
