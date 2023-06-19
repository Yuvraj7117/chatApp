import React from 'react';
import { useContext } from 'react';
import { UserContext } from './ContextData';




const Child = () => {

    const userdata=useContext(UserContext)
    console.log(userdata)
  return (
    <>
    <h1>
        {userdata.name}
    </h1>
    <h2>
        {userdata.gender}
    </h2>
    </>
  )
}

export default Child;