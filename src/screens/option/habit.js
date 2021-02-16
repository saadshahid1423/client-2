import React from 'react';
import '../../App.css';
import Water from '../../images/water.png';
import Exercise from '../../images/exercise.png';
import Yoga from '../../images/yoga.png';
import Book from '../../images/book.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Habit extends React.Component{
    waterhabit=()=>{
        this.props.history.push("/waterhabit")
    }
    exercisehabit=()=>{
        this.props.history.push("/exercisehabit")
    }
    yogahabit=()=>{
        this.props.history.push("/yogahabit")
    }
    readinghabit=()=>{
        this.props.history.push("/readinghabit")
    }
    render(){
        return(
            <div className="firstpic8">
                <Fade top cascade>
                <h1>Choose your habit</h1>
                </Fade>
                <Zoom bottom cascade>
                <div className="water">
                    <div onClick={this.waterhabit} style={{cursor:"pointer"}}>
                    <img className="waterpic" src={Water} />
                    <h3>Drink water</h3>
                    </div>
                    <div onClick={this.exercisehabit} style={{cursor:"pointer",marginLeft:"18%"}}>
                    <img className="waterpic" src={Exercise} />
                    <h3>Morning exercise</h3>
                    </div>
                </div>
                <div  style={{marginTop:"5%"}} className="water">
                <div onClick={this.yogahabit} style={{cursor:"pointer"}}>
                    <img className="waterpic" src={Yoga}/>
                    <h3>Neditate</h3>
                    </div>
                <div onClick={this.readinghabit} style={{cursor:"pointer",marginLeft:"27%"}} >
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