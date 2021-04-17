import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from '../MiniPalette/MiniPalette.component';


const styles = {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    container: {
        width: '50%',
        display:'flex',
        alignItems:'flex-start',
        flexDirection:'column',
        flexWrap: 'wrap',
    },
    nav: {
        display:'flex',
        width: '100%',
        justifyContent: 'space-between',
        color:'white',
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%',

    }
}


class PaletteList extends Component {

    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }


    render(){
        const {palettes} = this.props;
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={this.props.classes.palettes}>
                        {palettes.map((p) => (
                            <MiniPalette {...p} 
                                         handleClick={()=> this.goToPalette(p.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
    
}

export default withStyles(styles)(PaletteList);
{/* <Link to={`/palette/${p.id}`}>{p.paletteName}</Link> */}