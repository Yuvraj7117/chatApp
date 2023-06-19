import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import CountReducer from './counterSlice';
import ColorReducer from './themeSlice';

//Api 
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { getApi } from './Api/api';




export  const store=configureStore({
    reducer:{
       counter:CountReducer,
       themeColor: ColorReducer,

       [getApi.reducerPath]: getApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(getApi.middleware)
}) 


setupListeners(store.dispatch)