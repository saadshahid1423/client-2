import React from 'react'
import '../../App.css'
import Fade from 'react-reveal/Fade';

class Options1to1of1 extends React.Component {
    Movepage=()=>{
        this.props.history.push("/habits")
    }
    render() {
        return (
            <div className='firstpic4'>
                <Fade top cascade>
                <div>
                    <h1 className='head'>What do you hope to acheive with productive?</h1>
                </div>
                </Fade>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <center>
              <Fade bottom cascade>
               <div className='quesMain'>
                <div onClick={()=>this.Movepage()}  className='divques1'>
                <div style={{padding:"0.3%"}}>
                    <p className='ques'> I want to build good habits</p>
                </div>
                </div>
                <br></br>
                
                <br></br>
                <div onClick={()=>this.Movepage()} className='divques2'>
                <div style={{padding:"0.3%"}}>
                    <p className='ques'> I want to be organized</p>
                </div>
                </div>
                <br></br>
                
                <br></br>
                <div onClick={()=>this.Movepage()} className='divques3'>
                    <div style={{padding:"2%"}}>
                    <p className='ques'>Not ready to answer</p>
                    </div>
                </div>
                </div>
                </Fade>
                </center>
            </div>
        )
    }
}

export default Options1to1of1;