import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Styles/MiniPaletteStyles';

function MiniPalette(props) {

        const {classes, paletteName, emoji, colors} = props;
        const miniColorBoxes = colors.map(c => (
            <div className={classes.miniColor} 
                 style={{backgroundColor:c.color}}
                 key={c.name}
                 >
            </div>
        ));
        return (
            <div className={classes.root} onClick={props.handleClick}>
                <div className={classes.colors}>
                    {/* Mini Color Boxes */}
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
            </div>
        );
}

export default withStyles(styles)(MiniPalette);