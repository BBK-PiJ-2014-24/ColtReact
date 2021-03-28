import React, { Component } from 'react';
import '../DogPage/DogPage.css';
import {Link} from 'react-router-dom';

class DogPage extends Component {

    render(){
        let {dog} = this.props;

        return(

                <div className='DogPage row justify-content-center mt-5'>
                    <div className='col-11 col-lg-5'>
                        <div className='DogPage-card card'>
                            <img className='card-img-top' src={dog.src} alt={dog.name} />
                            <div className='card-body'>
                                <h2 className='card-title'>{dog.name}</h2>
                                <h4 className='card-subtitle text-muted'>{dog.age} years old</h4>
                            </div>
                            <ul className='list-group list-group-flush'>
                                {dog.facts.map((fact, index) => 
                                    <li className='list-group-item' key={index}>{fact}</li>
                                )}
                            </ul>
                            <div className='card-body'>
                                 <Link to='/dogs' className='btn btn-info'>GO BACK</Link>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default DogPage;