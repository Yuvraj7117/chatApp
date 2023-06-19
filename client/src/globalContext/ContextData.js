import { createContext } from "react";
import data from './data';


const UserContext = createContext();

const UserProvider=({children})=>{

     return <UserContext.Provider value={data}  >
        {children}
     </UserContext.Provider>
}

export {UserContext,UserProvider};