import React from 'react';
import yoga from '../../images/yoga.png';
import '../../App.css';
import Fade from 'react-reveal/Fade';


class Yoga extends React.Component {
    move=()=>{
        this.props.history.push('./yourgoals')
    }
    render() {
        return (
            <div className="main" >
            <Fade top cascade>
                <div className="drinkwater">
                    <h1 style={{ marginTop: "2%" }}>Meditate</h1>
                    <h4>Repeat every day to from a habit</h4>
                    <div style={{ textAlign: "right" }}>
                        <img className="water1" src={yoga} />
                    </div>
                </div>
                </Fade>

                <Fade bottom cascade>

                <div className="bike">
                    <h3>Set your goal</h3>
                    <input style={{ borderRadius: 10, backgroundColor: "rgb(211, 221, 230)" }} className="Inp1" type="Number" placeholder="minutes" />
                    <div>
                        <button onClick={this.move} className="thrdbutt">Continue</button>
                    </div>
                </div>
                </Fade>

            </div>
        )
    }
}
export default Yoga;