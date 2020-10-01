import React from 'react';
import { Main } from './views';
import './App.scss';
import { Router } from '@reach/router';

const App = () => (
    <Router>
        <Main path="/" />
    </Router>
);

export default App;
