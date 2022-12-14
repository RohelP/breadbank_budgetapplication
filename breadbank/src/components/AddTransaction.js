import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = (props) => {
  const totalAmount = props.amount
  const setTotalAmount = props.setAmount
  const expense = props.expense
  const setExpense = props.setExpense
  const setGoal = props.setGoal


  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const [goalAmount,setGoalAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    if(Number(amount)> 0){
      setTotalAmount(Number(totalAmount)+Number(amount))
    }
    else{
      setExpense(Number(expense)-Number(amount))
    }

    
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3 className='transaction_name'>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className='nametext' htmlFor="text">Text</label>
          <input className='nametextbox' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label className='nameamount' htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input className='nameamountbox' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>

      <h3 className='textbox' htmlFor="text">Goal Box</h3>
          <input className='entertext' type="text" placeholder="Enter Goal Amount..." onChange={(e) => {setGoalAmount(e.target.value)
          console.log(goalAmount)}}/>
          <button className="goaladd" onClick={() => setGoal(goalAmount)}>Add Goal</button>
    </>
  )
}
