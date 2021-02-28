import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card.component';
import './CardDeck.css';

const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class CardDeck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            drawn:[],
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        let cardDeck = await axios.get(`${API_BASE_URL}new/shuffle/`);
        this.setState({ deck: cardDeck.data});
    }

    async getCard(){
        let id = this.state.deck.deck_id;
        let cardURL = `${API_BASE_URL}${id}/draw/`;
        try{
            let cardRes = await axios.get(cardURL);
            console.log(cardRes.data);
            let card = cardRes.data.cards[0];
            if(!cardRes.data.success){
                throw new Error("No More Cards Remaining");
            }
        
            this.setState(prevState => ({
                drawn: [
                    ...prevState.drawn,  {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}` 
                    }
                ],
            }));
        } catch(err){
            alert(err);
        }
    }

    render(){
        let dealtCards = this.state.drawn.map(c=>(
                <Card key={c.id} name={c.name} image={c.image} />
            ));

            return (
            <div className='CardDeck'>
                <h1 className='CardDeck-title'>Card Dealer</h1>
                <button className='CardDeck-btn' onClick={this.getCard}>Get Card</button>
                <div className='CardContainer'>{dealtCards}</div>
            </div>
        );
    }
}

export default CardDeck;