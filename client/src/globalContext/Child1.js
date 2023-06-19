import React,{useContext} from 'react';
import { CalContext } from './ContextCal';


const Child1 = () => {

    const val = useContext(CalContext)
  return (
    <>
 
    <button onClick={val.increment}>INCREMENT</button>
    <h1>{val.num}</h1>
    <button onClick={val.decrement}>DECREMENT</button>
    </>
  )
}

export default Child1