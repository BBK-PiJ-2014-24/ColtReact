import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';

class BoxForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            box: {height: "", width:"", color: ""}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState((prevState)=>(
             {box : {...prevState.box, [e.target.name] : e.target.value}} 
        ));
        console.log(this.state.box);
    }

    handleSubmit(e){
        e.preventDefault();
        const newBox = {...this.state.box, id: uuid()}
        this.props.createNewBox(newBox);
        // Clear Form
        this.setState({
            box: {height: "", width:"", color: ""}
        }); 
    }

    render(){
        return (
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label htmlFor="height">Height:  </label>
                  <input type="text" 
                         id="height" 
                         name="height" 
                         value= {this.state.box.height} 
                         onChange={this.handleChange}
                    />     
              </div>
              <div>
                  <label htmlFor="width">Width:  </label>
                  <input type="text" 
                         id="width" 
                         name="width" 
                         value= {this.state.box.width} 
                         onChange={this.handleChange}
                    />     
              </div>
              <div>
                  <label htmlFor="color">Colour:  </label>
                  <input type="text" 
                         id="color"
                         name="color"
                         value= {this.state.box.color} 
                         onChange={this.handleChange}
                    />     
              </div>
              <button>Submit Box</button>
          </form>  
        );}
}


export default BoxForm;