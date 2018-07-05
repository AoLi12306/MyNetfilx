import _ from 'lodash';
import { ADD_TO_RECOMMENDATIONS, REOMVE_FROM_RECOMMENDATIONS } from '../actions';

export default function(state=[], action) {
    let clone = null;
    switch(action.type) {
        case ADD_TO_RECOMMENDATIONS:
            console.log(ADD_TO_RECOMMENDATIONS);
            clone = _.cloneDeep(state);
            clone.push(action.payload);
            return clone;
            
        case REOMVE_FROM_RECOMMENDATIONS:  
             console.log(REOMVE_FROM_RECOMMENDATIONS);
             clone = _.cloneDeep(state);
             clone = clone.filter(el => {
                return el.id !== action.payload
            });
            return clone;
        default:
            return state;
    }
}