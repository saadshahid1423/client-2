import React from 'react';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Start from '../screens/start/start';
import First from '../screens/first/first';
import Second from '../screens/second/second';

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Start} />
                <Route path="/welcome" component={First} />
                <Route path="/night" component={Second} />
            </Router>
        )
    }
}

export default AppRouter ;