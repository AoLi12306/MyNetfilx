import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addToRecommendations, removeFromList } from '../actions/index.js';
import Film from '../components/filmItem/filmItem.js';
import './recommendation_list.css';

class MyList extends Component {
    render() {
        const mylist = this.props.list;
        const addHanlder = function (film){
            this.props.removeFromList(film.id);
            this.props.addToRecommendations(film);
        }
        return (
            <div className="row top50">
               <p className="h3 row">MyList</p>
                <div className="row">
                    {mylist.map(film => <Film key={film.id} film={film} handler={addHanlder.bind(this, film)} buttonText="Remove" />)} 
                </div>
            </div>
        );
    }
}

function mapStateToProps({ mylist }) {
    mylist = mylist || [];
    return { list: mylist };
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromList: id => {
      dispatch(removeFromList(id));
    },
    addToRecommendations: film => {
        dispatch(addToRecommendations(film));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyList);