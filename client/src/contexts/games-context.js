// Context.js
// new
import React, { useReducer } from "react";
// new
let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return;
  }
};
const initialState = { count: 100 }
const CounterContext = React.createContext(initialState);
function CounterProvider(props) {
  // new
  const [state, dispatch] = useReducer(reducer, initialState);
return (
   // new
   <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}
export { CounterContext, CounterProvider };