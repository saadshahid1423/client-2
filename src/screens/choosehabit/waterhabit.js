import React from 'react';
import '../../App.css';
import Water from '../../images/water.png';
import Fade from 'react-reveal/Fade';




class Drinkwater extends React.Component {
    move=()=>{
        this.props.history.push('./yourgoals')
    }
    render() {
        return (
            <div className="main" >
            <Fade top cascade>
                <div className="drinkwater">
                    <h1 style={{ marginTop: "2%" }}>Drink Water</h1>
                    <h4>Repeat every day to from a habit</h4>
                    <div style={{ textAlign: "right" }}>
                        <img className="water1" src={Water} />
                    </div>
                </div>
                </Fade>

                <Fade bottom cascade>

                <div className="bike">
                    <h3>Set your goal</h3>
                    <input style={{ borderRadius: 10, backgroundColor: "rgb(211, 221, 230)" }} className="Inp1" type="Number" placeholder="glasses" />
                    <div>
                        <button onClick={this.move} className="thrdbutt">Continue</button>
                    </div>
                </div>
                </Fade>




            </div>
        )
    }
}
export default Drinkwater;