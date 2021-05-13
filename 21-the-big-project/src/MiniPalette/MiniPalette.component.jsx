import React, {PureComponent}  from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete'

class MiniPalette extends PureComponent {

    constructor(props){
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }

    deletePalette(e){
        e.stopPropagation();
        const id = this.props.id
        this.props.openDialog(id);
    }

    render(){
        const {classes, paletteName, emoji, colors} = this.props;
        const miniColorBoxes = colors.map(c => (
            <div className={classes.miniColor} 
                 style={{backgroundColor:c.color}}
                 key={c.name}
                 >
            </div>
        ));
        return (
            <div className={classes.root} onClick={ () => this.props.handleClick(this.props.id)}>
                    <DeleteIcon className={classes.deleteIcon}
                                style={{transition: 'all 0.3s ease-in-out'}}
                                onClick={this.deletePalette}
                     />
                <div className={classes.colors}>
                    {/* Mini Color Boxes */}
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
            </div>
        );
    }
}

export default withStyles(styles)(MiniPalette);