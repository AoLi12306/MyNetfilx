import _ from 'lodash';
import { ADD_TO_LIST, REOMVE_FROM_LIST } from '../actions';

export default function(state=[], action) {
    let clone = null;
    switch(action.type) {
        case ADD_TO_LIST:
            console.log(ADD_TO_LIST);
            clone = _.cloneDeep(state);
            clone.push(action.payload);
            return clone;
            
        case REOMVE_FROM_LIST:
            console.log(REOMVE_FROM_LIST);
            clone = _.cloneDeep(state);
            clone = clone.filter(el => {
                return el.id !== action.payload
            });
            return clone;
        default:
            return state;
    }
}