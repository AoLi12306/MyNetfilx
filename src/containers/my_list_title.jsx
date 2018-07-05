import React, { Component } from 'react'
import { connect } from 'react-redux';
import './recommendation_list.css';

class MyListTitle extends Component {
    render() {
        const mylist = this.props.list;

        return (
            <div className="row top50">
               <p className="row h3">My list category</p>
                <div className="row">
                    {mylist.map(film => <li key={film.id} >{film.title}</li>)} 
                </div>
            </div>
        );
    }
}

function mapStateToProps({ mylist }) {
    mylist = mylist || [];
    return { list: mylist };
}

export default connect(mapStateToProps)(MyListTitle);