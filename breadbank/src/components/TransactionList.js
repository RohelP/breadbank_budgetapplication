import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = (props) => {
  const { transactions } = useContext(GlobalContext);
  const amount = props.amount
  const expense = props.expense 
  const setAmount = props.setAmount
  const setExpense = props.setExpense
  return (
    <>
      <h3 className='history'>History of Transactions</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} amount={amount} expense={expense} setAmount={setAmount} setExpense={setExpense}/>))}
        
      </ul>
    </>
  )
}
