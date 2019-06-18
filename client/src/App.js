import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import BuddyView from './components/BuddyView'
import GameConfigWindow from './components/GameConfigWindow'
import Test from './components/Test'

const App = () => (
    <Router>
        <Route exact path="/" component={BuddyView} />
        <Route path="/test/:id" component={Test} />
        <Route path="/settings/:id" component={GameConfigWindow} />
    </Router>
)

export default App