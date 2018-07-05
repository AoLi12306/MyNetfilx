import React, { Component } from 'react';

import Nav from './nav/nav.js';
import MyList from '../containers/my_list.jsx';
import MyListTitle from '../containers/my_list_title.jsx';
import RecommendationList from '../containers/recommendation_list.jsx';

import './app.css';

class App extends Component {    
    
    render() {
        return (
            <div className="container">
                <Nav />
                <MyList />
                <RecommendationList />
                <MyListTitle />
            </div>
        );
    }
}

export default App;