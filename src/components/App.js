import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';

import Notes from './Notes';
import Note from './Note';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Notes} />
                <Route exact path="/Note" component={Note} />
            </Switch>
        </div>
    );
}

export default App;
