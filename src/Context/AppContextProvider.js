import React, { createContext,useReducer } from 'react'
import reducer from './reducer'
export const AppContext=createContext()

const AppContextProvider = ({children}) => {
const initialValue={text:'',words:0,sentences:0,characters:0,paragraphs:0,pronouns:0,allWords:[],longestWord:''}

const [state,dispatch]=useReducer(reducer,initialValue)
  return (
    <div>
      <AppContext.Provider value={{state,dispatch}}>
         {children}
      </AppContext.Provider>
    </div>
  )
}

export default AppContextProvider
