import React, { Component } from "react"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGlassWhiskey } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMale } from '@fortawesome/free-solid-svg-icons'
import "../../App.css"
// import capture from '../../images/Capture111.PNG'
import Fade from 'react-reveal/Fade';




class Navs extends Component {
    addnew=()=>{
        this.props.history.push("/habits")
    }
    render() {
        return (

            <div className="main ">
            <Fade top cascade>

                <div className='navsBar'>
                    <p>Start a new streak by completing habits</p>
                    <h1>1 Days</h1>
                    <p>your current streak</p>
                </div>
                </Fade>

                <br />
                <br />
                <br />
                <Fade bottom cascade>

                <div onClick={this.addnew} className="newHabbits" style={{ textDecoration: 'none', transition: "all 0.5 ease"}}>Get started New Habbit <FontAwesomeIcon icon={faPlus} /> </div>
                {/* <div style={{cursor:"pointer",marginBottom:"2%"}} className="justcont"> */}
                
                    <div className='dirnkWater'>
                        {/* <div style={{display:"flex",justifyContent:"center"}}> */}
                        <h4 style={{textAlign:"center"}}> <FontAwesomeIcon icon={faGlassWhiskey} color="white"  /> Drink Water 1/5 </h4>
                        {/* </div> */}
                    

                        <p  style={{textAlign:"center"}}className="ptext" > <FontAwesomeIcon icon={faStar} /> New glass </p>
                    </div>
                {/* </div> */}
                
                </Fade>

            </div>


        )
    }
}


export default Navs