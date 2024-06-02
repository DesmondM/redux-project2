import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch()
    const counter =useSelector(state=>state.counter)
    const increaseBy =useSelector(state=>state.increaseBy)
    const show =useSelector(state=>state.showCounter)
    
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    };
  const handleIncrement=()=>{
    dispatch(counterActions.increment())
  }
  const handleDecrement=()=>{
    dispatch(counterActions.decrement())
  }
  const handleIncreaseBy10=()=>{
    dispatch(counterActions.increase(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div className={classes.value}>-- {increaseBy} --</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        {show && <button onClick={handleIncreaseBy10}>Increase by 10</button>}
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
