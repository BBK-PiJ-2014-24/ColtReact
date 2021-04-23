import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';
// import '../NavBar/NavBar.css';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/NavBarStyles';

class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            format: 'hex',
            open: false
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(e){
        this.setState({format: e.target.value, open: true});
        this.props.handleChange(e.target.value);
    }

    closeSnackbar(){
       this.setState({
           open: false
       }); 
    }

    render(){
        return (
        <header className={this.props.classes.NavBar}>
            <div className={this.props.classes.logo}>
                <Link to='/'>ReactColorPicker</Link>
            </div>
            {this.props.showSlider&& (
                <div className='slider-container'>
                    <span>Level: {this.props.level}</span>
                    <div className={this.props.classes.slider}>
                        <Slider defaultValue={this.props.level} 
                                min={100} max={900} step={100}
                                onAfterChange={this.props.changeLevel}    
                        />
                    </div>
                </div>
            )}
            <div className={this.props.classes.selectContainer}>
                <Select value={this.state.format} onChange={this.handleFormatChange}>
                    <MenuItem value='hex'>HEX #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA rgba(255,255,255,0.2)</MenuItem>
                </Select>
            </div>
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left' }} 
                      open={this.state.open}   
                      autoHideDuration={3000}
                      message={<span id='message-id'> Format Changed to {this.state.format.toUpperCase()}</span>}
                      ContentProps={{
                          'aria-describedby': 'message-id'
                      }}
                      onClose={this.closeSnackbar}
                      action={[
                        <IconButton onClick={this.closeSnackbar} 
                                    color='inherit' 
                                    key='close'
                                    aria-label='close'>
                            <CloseIcon />
                        </IconButton>
                        ]}
            />
        </header>

        );
    }
}

export default withStyles(styles)(NavBar);