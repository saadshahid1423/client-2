import React from 'react';
import "../../App.css";
import Back from '../../images/Capture.JPG'
import Fade from 'react-reveal/Fade';

class Start extends React.Component{
    MoveToFirst = () =>{
        // console.log("hello") 
        this.props.history.push("/welcome")
    }
    render(){
        return(
            // <div className="background">
            //     <h1>Saad</h1>
            // </div>
            <div className="firstpic">
                <Fade top cascade>
                <div className="ftext">
                <h1>The best time to start is now</h1>
                <p style={{fontSize:"16px"}}>You're taking the first step in changing your life. Let us guide you through it.</p>
                </div>
                </Fade>

            <Fade bottom cascade>
                <div>
                <button onClick={()=>this.MoveToFirst()} className="butt">Let's Do It</button>
                </div>
                {/* <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br> */}
                    {/* <br></br>    */}
                {/* </div> */}
                </Fade>
            </div>
        );
    };
};
export default Start;