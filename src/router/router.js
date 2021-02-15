import React from 'react';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Start from '../screens/start/start';
import First from '../screens/first/first';
import Second from '../screens/second/second';
import Options from '../screens/option/options';
import Options1to1 from '../screens/option/optiions1to1';
import Options1to1of1 from '../screens/option/options1to1of1';
import Habit from '../screens/option/habit';

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Start} />
                <Route path="/welcome" component={First} />
                <Route path="/night" component={Second}  />
                <Route path="/options" component={Options} />
                <Route path="/question1of1" component={Options1to1} />
                <Route path="/question1of1ofmore" component={Options1to1of1} />
                <Route path="/habits" component={Habit} />
            </Router>
        )
    }
}

export default AppRouter ;