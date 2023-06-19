import { createContext,useState } from "react";


const CalContext=createContext();



const CalProvider = ({children})=>{

    const [num,setNum]=useState(0);


    const increment = ()=>{
        setNum(num+1)
    }

    
    const decrement = ()=>{
        if(num<=0){
            setNum(0)
        }else{
            setNum(num-1)
        }
        
    }
    return <CalContext.Provider value={{increment,decrement,num}}>
       {children}
    </CalContext.Provider>
}

export {CalContext,CalProvider}