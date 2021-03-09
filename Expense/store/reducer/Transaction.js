import {ADD_TRANSACTION, 
  ADD_TRANSACTION1,
  ADD_TRANSACTION2,
  ADD_TRANSACTION3,
  ADD_TRANSACTION4,
  ADD_TRANSACTION5,
  ADD_TRANSACTION6,
  ADD_TRANSACTION7,
  ADD_TRANSACTIONHOME,
  ADD_TRANSACTIONCREDITMONEY,
   DELETE_TRANSACTION, 
   DELETE_TRANSACTION1,
   DELETE_TRANSACTION2,
   DELETE_TRANSACTION3,
   DELETE_TRANSACTION4,
   DELETE_TRANSACTION5,
   DELETE_TRANSACTION6,
   DELETE_TRANSACTION7,
   DELETE_TRANSACTIONHOME,
   DELETE_TRANSACTIONCREDITMONEY,
  } from '../action/types';

const initialState = { 
  transactions: [],
  transactionsBank: [],
  transactionsCredit: [],
  transactionsDebt: [],
  transactionsDebt1: [],
  transactionsCredit1: [],
  transactionsHome:[],
  transactionsAddbank:[],
  transactionsDeletebank:[],
  transactionsCreditmoney:[],

};

export default (state = initialState,action) => {
  switch (action.type) {
    case ADD_TRANSACTION: {
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        
      };
    }
    case DELETE_TRANSACTION:
      console.log(action.payload);
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload,
        ),
        
      };
// ****************************************************************************************
      case ADD_TRANSACTIONHOME: {
        return {
          ...state,
          transactionsHome: [action.payload, ...state.transactionsHome],
          
        };
      }
      case DELETE_TRANSACTIONHOME:
        console.log(action.payload);
        return {
          ...state,
          transactionsHome: state.transactionsHome.filter(
            (item) => item.id !== action.payload,
          ),
          
        };
// ****************************************************************************************
      case ADD_TRANSACTION1: {
        return {
          ...state,
          transactionsBank: [action.payload,...state.transactionsBank],
        };
      }
      case DELETE_TRANSACTION1:
        console.log(action.payload);
        return {
          ...state,
          transactionsBank: state.transactionsBank.filter(
            (item) => item.id !== action.payload,
          ),
        };
// ****************************************************************************************
        case ADD_TRANSACTION2: {
          return {
            ...state,
            transactionsCredit: [action.payload,...state.transactionsCredit],
          };
        }
        case DELETE_TRANSACTION2:
          console.log(action.payload);
          return {
            ...state,
            transactionsCredit: state.transactionsCredit.filter(
              (item) => item.id !== action.payload,
            ),
          };
// ****************************************************************************************
          case ADD_TRANSACTION3: {
            return {
              ...state,
              transactionsDebt: [action.payload,...state.transactionsDebt],
            };
          }
          case DELETE_TRANSACTION3:
            console.log(action.payload);
            return {
              ...state,
              transactionsDebt: state.transactionsDebt.filter(
                (item) => item.id !== action.payload,
              ),
            };
  // ****************************************************************************************
            case ADD_TRANSACTION4: {
              return {
                ...state,
                transactionsDebt1: [action.payload,...state.transactionsDebt1],
              };
            }
            case DELETE_TRANSACTION4:
              console.log(action.payload);
              return {
                ...state,
                transactionsDebt1: state.transactionsDebt1.filter(
                  (item) => item.id !== action.payload,
                ),
              };
 // ****************************************************************************************
              case ADD_TRANSACTION5: {
                return {
                  ...state,
                  transactionsCredit1: [action.payload,...state.transactionsCredit1],
                };
              }
              case DELETE_TRANSACTION5:
                console.log(action.payload);
                return {
                  ...state,
                  transactionsCredit1: state.transactionsCredit1.filter(
                    (item) => item.id !== action.payload,
                  ),
                };
// ****************************************************************************************
                case ADD_TRANSACTION5: {
                  return {
                    ...state,
                    transactionsCredit1: [action.payload,...state.transactionsCredit1],
                  };
                }
                case DELETE_TRANSACTION5:
                  console.log(action.payload);
                  return {
                    ...state,
                    transactionsCredit1: state.transactionsCredit1.filter(
                      (item) => item.id !== action.payload,
                    ),
                  };
// ****************************************************************************************
                case ADD_TRANSACTIONCREDITMONEY: {
                  return {
                    ...state,
                    transactionsCreditmoney: [action.payload,...state.transactionsCreditmoney],
                  };
                }
                case DELETE_TRANSACTIONCREDITMONEY:
                  console.log(action.payload);
                  return {
                    ...state,
                    transactionsCreditmoney: state.transactionsCreditmoney.filter(
                      (item) => item.id !== action.payload,
                    ),
                  };
// ****************************************************************************************
                case ADD_TRANSACTION6: {
                  return {
                    ...state,
                    transactionsAddbank: [action.payload,...state.transactionsAddbank],
                  };
                }
                case DELETE_TRANSACTION6:
                  console.log(action.payload);
                  return {
                    ...state,
                    transactionsAddbank: state.transactionsAddbank.filter(
                      (item) => item.id !== action.payload,
                    ),
                  };
  // ****************************************************************************************
                case ADD_TRANSACTION7: {
                  return {
                    ...state,
                    transactionsDeletebank: [action.payload,...state.transactionsDeletebank],
                  };
                }
                case DELETE_TRANSACTION7:
                  console.log(action.payload);
                  return {
                    ...state,
                    transactionsDeletebank: state.transactionsDeletebank.filter(
                      (item) => item.id !== action.payload,
                    ),
                  };
    default:
      return state;
  }
  
};