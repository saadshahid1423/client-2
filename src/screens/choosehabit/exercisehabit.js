import React from 'react';
import '../../App.css';
import Exercise from '../../images/exercise.png';
import Fade from 'react-reveal/Fade';
// import Cookies from 'js-coo'
// import * as cookie from 'cookie';
// import {Cookies} from 'react-cookie';
// import { instanceOf } from 'prop-types';
// import { withCookies, Cookies } from 'react-cookie';

class Morning extends React.Component {
    move=()=>{
        this.props.history.push('./yourgoals')
    }

    render() {
        return (
            <div className="main" >
            <Fade top cascade>
                <div className="drinkwater">
                    <h1 style={{ marginTop: "2%" }}>Morning Exercise</h1>
                    <h4>Repeat every day to from a habit</h4>
                    <div style={{ textAlign: "right" }}>
                        <img className="water1" src={Exercise} />
                    </div>
                </div>
                </Fade>
                <Fade bottom cascade>
                <div className="bike">
                    <h3>Set your goal</h3>
                    <input onChange={(e)=>this.setState({Exercise:e.target.value})} style={{ borderRadius: 10, backgroundColor: "rgb(211, 221, 230)" }} className="Inp1" type="Number" placeholder="minutes" />
                    <div>
                        <button onClick={this.move} className="thrdbutt">Continue</button>
                    </div>
                </div>
                </Fade>
            </div>
        )
    }
}
export default Morning;