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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {arrayMove} from 'react-sortable-hoc';
import PaletteFormNav from '../PaletteFormNav/PaletteFormNav.component';
import ColorPickerForm from '../ColorPickerForm/ColorPickerForm.component';
import styles from '../Styles/NewPaletteFormStyles';
import seedColors from '../seedColors';

const drawerWidth = 400;

// const styles = theme => ({
//   root: {
//     display: 'flex',
//   },
  // appBar: {
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // menuButton: {
  //   marginLeft: 12,
  //   marginRight: 20,
  // },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     display: 'flex',
//     alignItems: 'center',
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     height: 'calc(100vh - 64px)',
//     padding: theme.spacing.unit * 3,
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
//   container: {
//     width: '90%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%'
//   },
//   buttonContainer: {
//     width: '100%',
//   },

//   button: {
//     width: '50%'
//   }
// });


class NewPaletteForm extends Component {

    static defaultProps = {
      maxColors: 20,
    }
  
    constructor(props){
        super(props);
        this.state = {
            open: true,
            // currentColor: 'teal',
            colors: seedColors[0].colors,
            // newColorName:'',
            // newPaletteName: '',
        };
        // this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteColorBox = this.deleteColorBox.bind(this);
        this.clearPalette = this.clearPalette.bind(this);
        this.addRandomColor = this.addRandomColor.bind(this);
    }
    

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

      
    addNewColor(newColor){
         this.setState({colors: [...this.state.colors, newColor], newColorName: ''});
    }

    clearPalette(){
        this.setState({
          colors: [],
        });
    }
      
    addRandomColor(){
        const allColors = this.props.palettes.map(p => p.colors).flat();
        let randIdx;
        let randomColor;
        let isDuplicateColor = true;
        while(isDuplicateColor){
          randIdx = Math.floor(Math.random() * allColors.length);
          randomColor = allColors[randIdx];
          isDuplicateColor = this.state.colors.some( color => color.name === randomColor);
        }
        this.setState({
          colors: [...this.state.colors, randomColor]
        });
     }

    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        });
    }
      
    // Passed up from NewPaletteForm
    handleSubmit(newPalette){
          newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
          newPalette.colors= this.state.colors;
        this.props.savePalette(newPalette);
        this.props.history.push('/');// redirect
      }
      
      deleteColorBox(colorName){
          this.setState({
            colors: this.state.colors.filter( (c) => c.name !== colorName ),
      });
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
          colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };
    
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        const paletteIsFull  = this.state.colors.length >= this.props.maxColors;
    
        return (
          <div className={classes.root}>
            <PaletteFormNav open={open}
                            palettes={this.props.palettes}
                            handleSubmit={this.handleSubmit}
                            handleDrawerOpen={this.handleDrawerOpen}
            />
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                   <ChevronLeftIcon /> 
                </IconButton>
              </div>
              <Divider />
              <div className={classes.container}>
                <Typography variant='h4' gutterBottom>Design Your Palette</Typography>
                <div className={classes.buttonContainer}>
                  <Button className={this.props.classes.button}
                          variant='contained' 
                          color='secondary' 
                          onClick={this.clearPalette}>Clear Palette</Button>

                  <Button className={this.props.classes.button}
                          variant='contained' 
                          color='primary' 
                          onClick={this.addRandomColor}
                          disabled={paletteIsFull}
                          style={{backgroundColor: paletteIsFull ? 'grey'  : 'primary'}}
                          >
                          Random Color
                  </Button>
                </div>
                <ColorPickerForm 
                  paletteIsFull={paletteIsFull}
                  addNewColor={this.addNewColor}
                  colors={this.state.colors}
                />
              </div>
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
              <DragableColorBoxList colors={this.state.colors}
                                    deleteColorBox={this.deleteColorBox}
                                    axis='xy'
                                    onSortEnd={this.onSortEnd}
                                    distance={20}
              />
            </main>
          </div>
        );
   }

}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);