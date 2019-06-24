import React, { useContext } from 'react'
import { CounterContext } from '../contexts/games-context'


function SeparateComponent() {
    // new
    const { state } = useContext(CounterContext);
  return (
      <div>
        {/* new */}
       <h1>Shared Count: {state.count}</h1>
        <button onClick={() => {}}>Fetch Again</button>
      </div>
    );
  }

  export default SeparateComponent
