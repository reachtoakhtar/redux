/**
 * Created by Akhtar on 22/03/2020.
 */

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer)
export default store
