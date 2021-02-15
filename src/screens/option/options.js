import React from 'react'
import Fade from 'react-reveal/Fade';
import '../../App.css'

class Options extends React.Component {
    Movepage=()=>{
        this.props.history.push("/question1of1")
    }
    render() {
        return (
            <div className='firstpic4'>
            <Fade top cascade>
                <div>
                    <h1 className='head'>Do You Procrastinate ?</h1>
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
                <div onClick={()=>this.Movepage()} className='divques1'>
                <div style={{padding:"0.3%"}}>
                    <p className='ques'> Yes and I'm ready to <br/> change that</p>
                </div>
                </div>
                <br></br>
                
                <br></br>
                <div onClick={()=>this.Movepage()} className='divques2'>
                <div style={{padding:"0.3%"}}>
                    <p className='ques'> No, I easily finish the <br/>task at hands</p>
                </div>
                </div>
                <br></br>
                
                <br></br>
                <div onClick={()=>this.Movepage()} className='divques3'>
                    <div style={{padding:"2%"}}>
                    <p className='ques'> Not ready to answers</p>
                    </div>
                </div>
                </div>
                </Fade>
                </center>
            </div>
        )
    }
}

export default Options;