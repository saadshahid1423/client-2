import React from 'react'
import Fade from 'react-reveal/Fade';
import '../../App.css'

class Options1to1 extends React.Component {
    Movepage=()=>{
        this.props.history.push("/question1of1ofmore")
    }
    render() {
        return (
            <div className='firstpic4'>
            <Fade top cascade>
                <div>
                    <h1 className='head'>Did you find hard to focus?</h1>
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
                    <p className='ques'> Yes I get distracted easily</p>
                </div>
                </div>
                <br></br>
                
                <br></br>
                <div onClick={()=>this.Movepage()} className='divques2'>
                <div style={{padding:"0.3%"}}>
                    <p className='ques'> No, I stay focused when <br/>needed</p>
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

export default Options1to1;