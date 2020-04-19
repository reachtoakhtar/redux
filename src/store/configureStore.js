/**
 * Created by Akhtar on 22/03/2020.
 */

import {configureStore} from '@reduxjs/toolkit';
import reducer from './bugs';


export default function () {
  return configureStore({ reducer })
}
