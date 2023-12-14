import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/layout/CreateLi';
import Content from '../components/layout/Content';
const App = () => (
    <div>
        <Router>
            <Menu />
            <Content/>
        </Router>
    </div>
)

export default App;