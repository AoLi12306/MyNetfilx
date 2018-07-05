import React, { Component } from 'react'
import './filmItem.css'

export default class Film extends Component {    
    
 
    render() {
        const film = this.props.film;
        const handler = this.props.handler;
        const buttonText = this.props.buttonText;
        return (
            <div  className="col-sm-2  hoverToShow">
                <div>{film.title}</div>
                <div><img src={film.img} /></div>
                <div>
                    <button type="button" className="btn btn-danger fullLong" onClick={handler}>{buttonText}</button>
                </div>
            </div>

        );
    }
};