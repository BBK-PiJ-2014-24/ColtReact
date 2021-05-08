import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DragableColorBoxList from '../DragableColorBoxList/DragableColorBoxList.component';
import classNames from 'classnames';
import { lighten, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {ChromePicker, chromePicker} from 'react-color';
import {arrayMove} from 'react-sortable-hoc';
import PaletteMetaForm from '../PaletteMetaForm/PaletteMetaForm.component';


const drawerWidth = 400;
const styles = theme => ({

  root: {
      display: 'flex'
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection:'row',
    justifyContent:'space-between',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
});

class PaletteFormNav extends Component {

    constructor(props){
        super(props);
        this.state={
            newPaletteName: '',
            isFormModalOpen: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickModalOpen = this.handleClickModalOpen.bind(this);
        this.handleClickModalClose = this.handleClickModalClose.bind(this);
    }

    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleClickModalOpen(){
        console.log(this.state.isFormModalOpen);
        this.setState({isFormModalOpen: true});
        console.log(this.state.isFormModalOpen);
    }
    
    handleClickModalClose(){
      this.setState({isFormModalOpen: false});
    }

    render(){
        const {classes, open} = this.props;
        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                >
                <Toolbar disableGutters={!open}>
                    <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.props.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                    Create a Palette
                    </Typography>
                </Toolbar>
                    <div className={classes.navBtns}>
                    <Link to='/'>
                        <Button variant='contained' color='primary'>Go Back</Button>
                    </Link>
                    <Button variant="contained" 
                            color="secondary" 
                            onClick={this.handleClickModalOpen}>
                    SAVE
                    </Button>
                  </div>
                </AppBar>
                 {this.state.isFormModalOpen && (<PaletteMetaForm palettes={this.props.palettes}
                                  handleSubmit={this.props.handleSubmit} 
                                  handleClose={this.handleClickModalClose}
                                  /> 
                 )}                  
            </div>

        );

    }


}

export default withStyles(styles, {withTheme: true}) (PaletteFormNav);