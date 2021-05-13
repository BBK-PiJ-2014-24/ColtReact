import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from '../MiniPalette/MiniPalette.component';
import styles from '../Styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';


class PaletteList extends Component {

    constructor(props){
        super(props);
        this.state = {
            dialogBoxOpen: false,
            deletePaletteID:'',
        }
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDeletePalette = this.handleDeletePalette.bind(this);
    }

    openDialog(id){
        this.setState({dialogBoxOpen: true, deletePaletteID: id});
    }

    closeDialog(){
        this.setState({dialogBoxOpen: false, deletePaletteID: ''});
    }

    handleDeletePalette(){
        this.props.deletePalette(this.state.deletePaletteID);
        this.closeDialog();
    }

    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }


    render(){
        const {palettes} = this.props;
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                        <h1 className={this.props.classes.heading}>React Colors</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    <TransitionGroup className={this.props.classes.palettes}>
                    {palettes.map((p) => (
                                <CSSTransition key={p.id} classNames='fade' timeout={500}>
                                    <MiniPalette {...p} 
                                                handleClick={()=> this.goToPalette(p.id)}
                                                // handleDeletePalette ={this.props.deletePalette}
                                                openDialog={this.openDialog}
                                                key={p.id}
                                                id={p.id}
                                    />
                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                </div>
                <Dialog open={this.state.dialogBoxOpen} onClose={this.closeDialog} aria-labelledby='delete-dialog-title'>
                    <DialogTitle id='delete-dialog-title'>Delete Palette</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDeletePalette}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Delete'/>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button onClick={this.closeDialog}> 
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Cancel'/>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
    
    
}

export default withStyles(styles)(PaletteList);
{/* <Link to={`/palette/${p.id}`}>{p.paletteName}</Link> */}