import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addToList, removeFromRecommendations } from '../actions/index.js';
import Film from '../components/filmItem/filmItem.js';

import './recommendation_list.css';

class RecommendationList extends Component {    
    
    render() {
        const mylist = this.props.list;
        const addHanlder = function (film){
            this.props.removeFromRecommendations(film.id);
            this.props.addToList(film);
        }
        return (
            <div className="row top50">
               <p className="row h3">Recommendation List</p>
                <div className="row">
                    {mylist.map(film => <Film  key={film.id} film={film} handler={addHanlder.bind(this, film)} buttonText="Add" />)} 
                </div>
            </div>
        );
    }
}



function mapStateToProps({ recommendations }) {
    recommendations = recommendations || [];
    return { list: recommendations };
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromRecommendations: id => {
      dispatch(removeFromRecommendations(id));
    },
    addToList: film => {
        dispatch(addToList(film));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationList);