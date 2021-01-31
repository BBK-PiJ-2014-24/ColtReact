import React, { Component } from 'react';
import NumberItem from '../NumberItem/NumberItem.component';
import './NumberList.css';

class NumberList extends Component {

    constructor(props){
        super(props);
        this.state = {
            nums: [1,2,3,4,5],
        };
        this.remove = this.remove.bind(this);
    }

    remove(num){
        this.setState((prevState)=>({
            nums: prevState.nums.filter(n => n !== num)
        }));
    }

    render(){
        let nums = this.state.nums.map(n => (
            <NumberItem value={n} remove={this.remove} />
        ))
        return(
         <div className='NumberList'>
            <ul>{nums}</ul>  
         </div>
        )
    }


}

export default NumberList;