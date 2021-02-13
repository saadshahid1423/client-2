import React from 'react';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Start from '../screens/start/start';
import First from '../screens/first/first';
class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Start} />
                <Route path="/welcome" component={First} />
            </Router>
        )
    }
}

export default AppRouter ;