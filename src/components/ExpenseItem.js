
import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

const ExpenseItem = (props) => {
  const {dispatch, currency} = useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
        type: 'DELETE_EXPENSE',
        payload: props.id
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
        name: name,
        cost: 10,
    };
    dispatch({
        type: 'ADD_EXPENSE',
        payload: expense
    });
  }

  const decreaseAllocation = (name) => {
    const expense = {
        name: name,
        cost: 10
    };
    dispatch({
        type: 'RED_EXPENSE',
        payload: expense
    });
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td><FaPlusCircle size='1.3em' color="#4ead5c" onClick={event => increaseAllocation(props.name)}></FaPlusCircle></td>
      <td><FaMinusCircle size='1.3em' color="#af1e11" onClick={event => decreaseAllocation(props.name)}></FaMinusCircle></td>
      <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
    </tr>
  )
}

export default ExpenseItem