import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './counterSlice'


const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
 
    const dispatch = useDispatch()
    console.log(count)
  return (
    <>
     <h1 style={{color:"white"}}>Counter</h1>
     <h2 style={{color:"white"}}>{count}</h2>
     <button onClick={()=>{dispatch(increment())}}>+</button>
     <button onClick={()=>{dispatch(decrement())}}>-</button>
     
    </>
  )
}

export default Counter