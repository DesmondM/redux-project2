import {useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch()
  const counter =useSelector(state=>state.counter)
  const increaseBy =useSelector(state=>state.increaseBy)

  const handleIncrement=()=>{
    dispatch({type:"INCREMENT", payload:0})
  }
  const handleDecrement=()=>{
    dispatch({type:"DECREMENT" , payload:0})
  }
  const handleIncreaseBy10=()=>{
    dispatch({type:"INCREASEBY10", payload:10})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div className={classes.value}>-- {increaseBy} --</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncreaseBy10}>Increase by 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
