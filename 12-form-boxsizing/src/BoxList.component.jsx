import React, { Component } from 'react';
import Box from './Box.component';
import BoxForm from './BoxForm.component';

class BoxList extends Component {

    constructor(props){
        super(props);
        this.state={
            boxes: []
        };
        this.createNewBox = this.createNewBox.bind(this);
    }

    createNewBox(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    removeBox(id){
        this.setState((prevState) => (
            {
                boxes: prevState.boxes.filter(b => b.id!== id)
            }
        ));
    }


    render(){
        const boxes = this.state.boxes.map(b =>(
            <Box key={b.id}
                 id={b.id}
                 height={b.height} 
                 width={b.width}
                 color={b.color} 
                 removeBox={()=> this.removeBox(b.id)}
            />
            )
        );
        return(
            <div>
                <BoxForm createNewBox={this.createNewBox} />
                <h1>Colour List</h1>
                {boxes}
            </div>
        );
    }
}


export default BoxList;