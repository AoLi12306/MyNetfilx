export const ADD_TO_LIST = 'ADD_TO_LIST';
export const REOMVE_FROM_LIST = 'REOMVE_FROM_LIST';
export const ADD_TO_RECOMMENDATIONS = 'ADD_TO_RECOMMENDATIONS';
export const REOMVE_FROM_RECOMMENDATIONS = 'REOMVE_FROM_RECOMMENDATIONS';


export const addToList =  (film) => {
    return {
      type: ADD_TO_LIST,
      payload: film
    };
}

export const removeFromList = (id) => {
    return {
      type: REOMVE_FROM_LIST,
      payload: id
    };
}


export const addToRecommendations = (film) => {
    return {
      type: ADD_TO_RECOMMENDATIONS,
      payload: film
    };
}

export const removeFromRecommendations = (id) => {
    return {
      type: REOMVE_FROM_RECOMMENDATIONS,
      payload: id
    };
}