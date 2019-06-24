import React, { useContext } from 'react'
import { CounterProvider, CounterContext } from '../contexts/games-context'
import Counter from './TestChild1'
import SeparateComponent from './TestChild2'



function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
        <SeparateComponent />
      </CounterProvider>
    </div>
  );
}

export default App

