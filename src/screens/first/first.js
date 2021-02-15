import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "../../App.css";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function First(props) {
    const classes = useStyles();
    const [Hours, setAge] = React.useState('');
    const [Minutes, setMin] = React.useState('');
    const [AMPM, setAp] = React.useState('');


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChanges = (event) => {
        setMin(event.target.value);

    }; const handleChangess = (event) => {
        setAp(event.target.value);
    };
    const MoveToFirst = () =>{
        // console.log("hello") 
        props.history.push("/night")
        console.log(props)
        
    }
    return (
        <div className="firstpic2" >
            <Fade top cascade>
                <div className="ftext">
                    <h1>What time do you Usually wake up?</h1>
                </div>
                </Fade>
                <Fade bottom cascade>
            <div className="select">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Hours</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Hours}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>01</MenuItem>
                        <MenuItem value={2}>02</MenuItem>
                        <MenuItem value={3}>03</MenuItem>
                        <MenuItem value={4}>04</MenuItem>
                        <MenuItem value={5}>05</MenuItem>
                        <MenuItem value={6}>06</MenuItem>
                        <MenuItem value={7}>07</MenuItem>
                        <MenuItem value={8}>08</MenuItem>
                        <MenuItem value={9}>09</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Minutues</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Minutes}
                        onChange={handleChanges}
                    >
                        <MenuItem value={74}>00</MenuItem>
                        <MenuItem value={13}>01</MenuItem>
                        <MenuItem value={14}>02</MenuItem>
                        <MenuItem value={15}>03</MenuItem>
                        <MenuItem value={16}>04</MenuItem>
                        <MenuItem value={17}>05</MenuItem>
                        <MenuItem value={18}>06</MenuItem>
                        <MenuItem value={19}>07</MenuItem>
                        <MenuItem value={20}>08</MenuItem>
                        <MenuItem value={21}>09</MenuItem>
                        <MenuItem value={22}>10</MenuItem>
                        <MenuItem value={23}>11</MenuItem>
                        <MenuItem value={24}>12</MenuItem>
                        <MenuItem value={25}>13</MenuItem>
                        <MenuItem value={26}>14</MenuItem>
                        <MenuItem value={27}>15</MenuItem>
                        <MenuItem value={28}>16</MenuItem>
                        <MenuItem value={29}>17</MenuItem>
                        <MenuItem value={30}>18</MenuItem>
                        <MenuItem value={31}>19</MenuItem>
                        <MenuItem value={32}>20</MenuItem>
                        <MenuItem value={33}>21</MenuItem>
                        <MenuItem value={34}>22</MenuItem>
                        <MenuItem value={35}>23</MenuItem>
                        <MenuItem value={36}>24</MenuItem>
                        <MenuItem value={37}>25</MenuItem>
                        <MenuItem value={38}>26</MenuItem>
                        <MenuItem value={39}>27</MenuItem>
                        <MenuItem value={40}>28</MenuItem>
                        <MenuItem value={41}>29</MenuItem>
                        <MenuItem value={42}>30</MenuItem>
                        <MenuItem value={43}>31</MenuItem>
                        <MenuItem value={44}>32</MenuItem>
                        <MenuItem value={45}>33</MenuItem>
                        <MenuItem value={46}>34</MenuItem>
                        <MenuItem value={47}>35</MenuItem>
                        <MenuItem value={48}>36</MenuItem>
                        <MenuItem value={49}>37</MenuItem>
                        <MenuItem value={50}>38</MenuItem>
                        <MenuItem value={51}>39</MenuItem>
                        <MenuItem value={52}>40</MenuItem>
                        <MenuItem value={53}>41</MenuItem>
                        <MenuItem value={54}>42</MenuItem>
                        <MenuItem value={55}>43</MenuItem>
                        <MenuItem value={56}>44</MenuItem>
                        <MenuItem value={57}>45</MenuItem>
                        <MenuItem value={58}>46</MenuItem>
                        <MenuItem value={59}>47</MenuItem>
                        <MenuItem value={60}>48</MenuItem>
                        <MenuItem value={61}>49</MenuItem>
                        <MenuItem value={62}>50</MenuItem>
                        <MenuItem value={63}>51</MenuItem>
                        <MenuItem value={64}>52</MenuItem>
                        <MenuItem value={65}>53</MenuItem>
                        <MenuItem value={66}>54</MenuItem>
                        <MenuItem value={67}>55</MenuItem>
                        <MenuItem value={68}>56</MenuItem>
                        <MenuItem value={69}>57</MenuItem>
                        <MenuItem value={70}>58</MenuItem>
                        <MenuItem value={71}>59</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">AM/PM</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={AMPM}
                        onChange={handleChangess}
                    >
                        <MenuItem value={72}>AM</MenuItem>
                        <MenuItem value={73}>PM</MenuItem>
                    </Select>
                </FormControl>

            </div>
            <div>
                <button  onClick={MoveToFirst}  className="thrdbutt">Let's Do It</button>
                </div>
                </Fade>
        </div>
        
    );
}
// import React from 'react';

// class Second extends React.Component{
//     render(){
//         return(
//             <h1> Hello From Second</h1>
//             <button onClick={()=>this.pro}>Hello </button>
//         )
//     }
// }
// export default Second