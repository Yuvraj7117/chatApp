import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { ThemeColor } from './themeSlice';



const  Theme = () => {
    
    const [color,setColor]=useState("#00e000")


    const dispatch = useDispatch()
  return (
    <>
    <input type="color" onChange={(e)=>{setColor(e.target.value)}}/>
    <button onClick={()=>{dispatch(ThemeColor(color))}} >Change Theme Color</button>
    </>
  )
}

export default Theme