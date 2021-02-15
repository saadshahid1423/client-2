import React from 'react';
import '../../App.css';
import Water from '../../images/water.png';
import Exercise from '../../images/exercise.png';
import Yoga from '../../images/yoga.png';
import Book from '../../images/book.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Habit extends React.Component{
    render(){
        return(
            <div className="firstpic8">
                <Fade top cascade>
                <h1>Choose your first habit</h1>
                </Fade>
                <Zoom bottom cascade>
                <div className="water">
                    <div style={{cursor:"pointer"}}>
                    <img className="waterpic" src={Water} />
                    <h3>Drink water</h3>
                    </div>
                    <div style={{cursor:"pointer",marginLeft:"18%"}}>
                    <img className="waterpic" src={Exercise} />
                    <h3>Morning exercise</h3>
                    </div>
                </div>
                <div style={{marginTop:"5%"}} className="water">
                <div style={{cursor:"pointer"}}>
                    <img className="waterpic" src={Yoga}/>
                    <h3>Neditate</h3>
                    </div>
                <div style={{cursor:"pointer",marginLeft:"27%"}} >
                    <img className="waterpic toptop" src={Book}   />
                    <h3>Read</h3>
                    </div>
                </div>
                </Zoom>
            </div>
        );
    };
};
export default Habit;