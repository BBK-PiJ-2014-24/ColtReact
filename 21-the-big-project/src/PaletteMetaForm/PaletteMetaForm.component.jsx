import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import {Picker} from 'emoji-mart';

class PaletteMetaForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            stage: 'form',
            newPaletteName: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker =  this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }
            
    componentDidMount(){ 
      ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
          this.props.palettes.every(
            (p) => p.paletteName.toLowerCase() !== value.toLowerCase()
          )
      );
    }

    showEmojiPicker(){
        this.setState({stage: 'emoji'});
    }

    savePalette(emoji){
        const newPalette = {
            paletteName: this.state.newPaletteName ,
            emoji: emoji.native,
        }
        this.props.handleSubmit(newPalette);
        this.setState({stage: ''});
    }

    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };


    render(){
        return(
            <div>
            <Dialog open={this.state.stage === 'emoji'}
                    onClose={this.props.handleClose} >
                <DialogTitle id="form-dialog-title">EMOJI TICKER</DialogTitle>
                    <Picker title='Pick a Palette Emoji'
                            onSelect={this.savePalette} />
            </Dialog>
            <Dialog
                open={this.state.stage === 'form'}
                onClose={this.props.handleClose}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
                <ValidatorForm onSubmit={this.showEmojiPicker}>
                    <DialogContent>
                        <DialogContentText>
                           Enter Name for Your Palette Below
                        </DialogContentText>
                                <TextValidator value={this.state.newPaletteName}
                                                name='newPaletteName'
                                                label='Palette Name'
                                                fullWidth
                                                margin="normal"
                                                onChange={this.handleChange}
                                                validators={['required', 'isPaletteNameUnique' ] }
                                                errorMessages={['Palette must have name', 'Palette must have unique name']}
                                                />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button variant='contained'
                                color='secondary'
                                type='submit'
                                >
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;