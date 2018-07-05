import { combineReducers } from 'redux';

import MylistReducer from './my_list_reducer.js';
import RecommendationsReducer from './recommendations_reducer.js';

const rootReducer = combineReducers({
 mylist: MylistReducer,
 recommendations: RecommendationsReducer
});


export default rootReducer;