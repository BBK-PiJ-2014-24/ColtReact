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
import styles from '../Styles/ColorPickerFormStyles';

// const styles = {
//   picker: {
//     width: '100% !important',
//     marginTop: '2rem',
//   },
//   addColor: {
//     width: '100%',
//     padding: '1rem',
//     marginTop: '1rem',
//     fontSize: '2rem',
//   },
//   colorNameInput: {
//     width: '100%',
//     height: '70%',    
//   }
// };

class ColorPickerForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentColor:'teal',
            newColorName:'',
        };
        this.updateCurrentColor=this.updateCurrentColor.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount() {
      // custom validation rules for name and color duplication
      ValidatorForm.addValidationRule('isColorNameUnique', value => 
        this.props.colors.every(
          ({name}) => name.toLowerCase() !== value.toLowerCase()
        )
      );
      ValidatorForm.addValidationRule('isColorUnique', value => { 
        return this.props.colors.every(
          ({color}) => color !== this.state.currentColor
        )
      }
      );
    }

    updateCurrentColor(newColor){
        this.setState({currentColor: newColor.hex});
    }

    handleChange(e){
       this.setState({
         [e.target.name]: e.target.value
       });
    }

    handleSubmit(){
          const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
          };
          this.props.addNewColor(newColor);
          this.setState({newColorName:''})
    }
      

    render(){
        return (
            <div>
              <ChromePicker color={this.state.currentColor} 
                            onChangeComplete={this.updateCurrentColor}
                            className={this.props.classes.picker}
              />
              <ValidatorForm onSubmit={this.handleSubmit}>
                <TextValidator className={this.props.classes.colorNameInput}
                               variant='filled'
                               margin='normal'
                               placeholder='Enter Color Name'
                               value={this.state.newColorName} 
                               name='newColorName'
                               onChange={this.handleChange}
                               validators={['required', 'isColorNameUnique', 'isColorUnique' ]}
                               errorMessages={['this field is required', 'Color name is not unique', 'Color is not unique']}
                />
                <Button className={this.props.classes.addColor}
                        variant='contained' 
                        type='submit'
                        color='primary'
                        disabled={this.props.paletteIsFull}
                        style={{backgroundColor: this.props.paletteIsFull ? 'grey'  : this.state.currentColor}}
                        >
                       {this.props.paletteIsFull ? 'Full Palette' : 'Add Color'}
                </Button>
              </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);