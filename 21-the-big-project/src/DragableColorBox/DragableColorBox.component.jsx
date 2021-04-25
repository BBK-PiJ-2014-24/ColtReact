import React from 'react';
import {withStyles} from '@material-ui/styles';

const styles ={
   root: {
       height: '25%',
       display: 'inline-block',
       position: 'relative',
       width: '20%',
       margin: '0 auto',
       cursor: 'pointer',
       marginBottom: '-3.5px',
   }
}

function DragableColorBox(props){

    return(
        <div className={props.classes.root} style={{backgroundColor: props.color}}>
            {props.name}
        </div>
    );
}

export default withStyles(styles)(DragableColorBox);