import React, { useContext } from 'react'
import { CounterContext } from '../contexts/games-context'
import openTestWindow from '../utilities/open-test-window'

function Counter() {
 
    // new
    const { state, dispatch } = useContext(CounterContext);
    return (
       <div>
         <h5>Count: {state.count}</h5>
          {/* new */}
         <button onClick={() => dispatch({ type: "increment" })}>
           +
         </button>
       {/* new */}
       <button onClick={() => dispatch({ type: "decrement" })}>
           -
        </button><br />
        <button onClick={() => openTestWindow('')}>open a new window </button>
       </div>
     );
   }

export default Counter

