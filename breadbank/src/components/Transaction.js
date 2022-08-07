import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ( { transaction,amount,expense,setAmount,setExpense }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  console.log(amount,expense)
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => {
        if (transaction.amount > 0) {
          setAmount(amount-transaction.amount)
        }
        else {
          setExpense(expense+transaction.amount)
        }
        deleteTransaction(transaction.id)
        }} className="delete-btn">x</button>
    </li>
  )
}
