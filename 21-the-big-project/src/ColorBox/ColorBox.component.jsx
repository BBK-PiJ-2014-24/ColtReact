import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from '../Styles/ColorBoxStyles';
import {withStyles} from '@material-ui/styles';
import '../ColorBox/ColorBox.css';


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