import React, { Component } from 'react'
import Ball from '../ball/Ball.component';
import './Lottery.css';

class Lottery extends Component {
    constructor(props){
        super(props);
        this.state = {
           nums: Array.from({length: this.props.maxBalls}), 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40,
    }

    generate(){
        this.setState((prevState)=>(
            {
                nums: prevState.nums.map( n=> Math.floor(Math.random()*this.props.maxNum)+1)        
            }
        ));  
        console.log(this.state.nums);
    }

    handleClick(){
        this.generate();
    }

    render(){
        const {title, maxBalls, maxNum} = this.props;
        return(
            <section className="Lottery">
                <h1>{title}</h1>
                <div>
                   {this.state.nums.map((n)=>(<Ball ballNum={n} />))} 
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        );
    }

}

export default Lottery;