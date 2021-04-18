import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {withStyles} from '@material-ui/styles';
import '../ColorBox/ColorBox.css';
import chroma from 'chroma-js';

const styles = {

    colorBox: {
        height: props => props.showFullPalette ? '25%' :  '50%',
        display: 'inline-block',
        position: 'relative',
        width: '20%',
        margin: '0 auto',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover button":{
            opacity: 1,
        }
    },

    copyText: {
        color: props => chroma(props.background).luminance() > 0.5 ? 'rgba(0,0,0,0.5)' : 'white'
    },
    colorName:{
        color: props => chroma(props.background).luminance() < 0.06 ? 'rgba(0,0,0,0.5)' : 'white'
    },
    seeMore:{
        color: props => chroma(props.background).luminance() > 0.7 ? 'rgba(0,0,0,0.5)' : 'white',
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        width: '60px',
        height: '30px',
        padding: '10px',
        textTransform: 'uppercase',
        fontSize: '12px',
        background: "rgba(255, 255, 255, 0.3)",
        border: 'none',
        textAlign: 'center',
        lineHeight: '30px',
    },
    copyButton:{
        color: props => chroma(props.background).luminance() > 0.7 ? 'rgba(0,0,0,0.5)' : 'white',
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        marginTop: '-15px',
        left: '50%',
        marginLeft: '-50px',
        width: '100px',
        height: '30px',
        textAlign: 'center',
        outline: 'none',
        border: 'none',
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        opacity: '0',
    },

    boxContent: {
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },

    copyOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '0',
        zIndex: '0',
        transition: 'transform 1s ease-in-out',
    },

    showOverlay: {
        position: 'absolute',
        opacity: '1',
        zIndex: '10',
        transform: 'scale(50)',
    },
     copyMsg: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        textTransform: 'uppercase',
        "& h1": {
                fontWeight: '400',
                textShadow: '1px 2px black',
                background: "rgba(255, 255, 255, 0.2)",
                width: '100%',
                textAlign: 'center',
                marginBottom: '0',
                padding: '1rem',
            },
        "& p": {
            fontSize: '2rem',
            fontWeight: '100',
           },
        },
     showMsg: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '20',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.2s',
     }

}

class ColorBox extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isCopy: false,
        };
        this.changeCopyState =  this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({isCopy: true}, ()=> {
            setTimeout(()=> this.setState({isCopy: false}), 1500);
        });
    }

    render(){
        const {name, background, paletteId, id, showFullPalette} = this.props;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}> 
                <div className={this.props.classes.colorBox} style={{background}} >
                    <div className={`${this.props.classes.copyOverlay} ${this.state.isCopy && this.props.classes.showOverlay}`} style={{background}}></div>
                    <div className={`${this.props.classes.copyMsg} ${this.state.isCopy && this.props.classes.showMsg}`}>
                        <h1>Copied!</h1>
                        <p className={this.props.classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={this.props.classes.boxContent}>
                            <span className={this.props.classes.colorName}>{name}</span>
                        </div>
                        <button className={this.props.classes.copyButton}>Copy</button>
                    </div>
                    {showFullPalette && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={(e)=> e.stopPropagation()}> 
                            <span className={this.props.classes.seeMore}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }

}

export default withStyles(styles)(ColorBox);