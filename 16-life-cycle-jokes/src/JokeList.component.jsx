import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import Joke from './Joke.component';
import './JokeList.css';

const URL = 'https://icanhazdadjoke.com/';

class JokeList extends Component {

    static defaultProps ={
        numJokesToGet: 10,
    };

    constructor(props){
        super(props);
        this.state={
            jokesArr: JSON.parse(window.localStorage.getItem('jokesArr') || '[]'),
            isLoading: false,
        };
        this.handleClick = this.handleClick.bind(this); 
    }


    async componentDidMount(){
        if(this.state.jokesArr.length === 0){
            this.getJokes();
        }
    }
    async getJokes(){    
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet){

            let res = await axios.get(URL, {headers: {Accept: "application/json"}});
            jokes.push({id: uuidv4(), text: res.data.joke, votes: 0});
        }
        this.setState(prevState => (
           {
                isLoading: false,
                jokesArr: [...prevState.jokesArr, ...jokes]
           }    
        ),
        () => window.localStorage.setItem('jokesArr', JSON.stringify(this.state.jokesArr))
        );
    }
         

    handleVote(id, delta){
        this.setState(prevState => (
            { jokesArr: prevState.jokesArr.map( j => 
                j.id === id ?  {...j, votes: j.votes + delta} : j    
            )}),
           () => window.localStorage.setItem('jokesArr', JSON.stringify(this.state.jokesArr))
        );
    }

    handleClick(){
        this.setState({isLoading: true}, this.getJokes);
    }

    render(){

        if(this.state.isLoading){
            return(
                <div className="JokeList-spinner">
                    <i className='far fa-8x fa-laugh fa-spin' />
                    <h1 className='JokeList-title'>Loading...</h1>
            </div>
            )
        } else {
        return(
                <div className='JokeList'>
                    <div className='JokeList-sidebar'>
                        <h1 className='JokeList-title'><span>Dad </span>Jokes</h1>
                        <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='name'/>
                        <button className='JokeList-getmore' onClick={this.handleClick}>New Jokes</button>
                    </div>
                    <div className='JokeList-jokes'>
                        {this.state.jokesArr.map(j => (
                                <Joke key={j.id} 
                                    text={j.text} 
                                    votes={j.votes}
                                    upVote={() => this.handleVote(j.id, 1)} 
                                    downVote={() => this.handleVote(j.id, -1)}
                                />
                        ))}
                    </div>
                </div>
            );
        }
    }
}

export default JokeList;