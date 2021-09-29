import { useReducer, createContext } from "react";


// initial State
const initialState = {
  isChange: false
}

// create Context
const Context = createContext()

// root reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return !state
    default:
      return state
  }
}

// context Provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }