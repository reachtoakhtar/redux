/**
 * Created by Akhtar on 13/05/2020.
 */

import {combineReducers} from 'redux';
import entitiesReducer from './entities';


export default combineReducers({
  entities: entitiesReducer
})
