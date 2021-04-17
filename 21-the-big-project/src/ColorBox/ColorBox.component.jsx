import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
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
        const {name, background, paletteId, id, showLink} = this.props;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}> 
                <div className='ColorBox' style={{background}} >
                    <div className={`copy-overlay ${this.state.isCopy && 'show'}`} style={{background}}></div>
                    <div className={`copy-msg ${this.state.isCopy && 'show'}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={(e)=> e.stopPropagation()}> 
                            <span className='see-more'>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }

}

export default ColorBox;