import React, { Component } from 'react';
import Pokecard from "../pokecard/Pokecard.component.jsx";
import './Pokedex.css';

// component for an Array of Pokemon Cards
// ---------------------------------------
// Props -
// pokemon - array of cards
// totalexp - total score of hand
// is Winner - boolean
class Pokedex extends Component {



    render(){
        // Logic for winning Hand
        let title;
        if (this.props.isWinner){
            title=<h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title=<h1 className="Pokedex-loser">Losing Hand</h1>
        }

        return(
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.totalexp}</h4>                
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard 
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience}
                        />
                    ))}
                </div>
            </div>
        );        
    }
}

export default Pokedex;