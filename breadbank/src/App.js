import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import {PieChart } from './components/PieChart';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [expense, setExpense] = useState(0);
  const [goal, setGoal] = useState(0);
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList amount={amount} expense={expense} setAmount={setAmount} setExpense={setExpense}/>
        <AddTransaction amount={amount} setAmount={setAmount} expense={expense} setExpense={setExpense} goal={goal} setGoal={setGoal}/>
        <PieChart amount={amount} expense={expense} goal={goal}/>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
