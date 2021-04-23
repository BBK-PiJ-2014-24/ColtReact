import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from '../MiniPalette/MiniPalette.component';
import styles from '../Styles/PaletteListStyles';



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