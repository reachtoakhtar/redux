/**
 * Created by Akhtar on 22/03/2020.
 */

import {createSlice} from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      })
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id)
      bugs[index].resolved = true
    },

    bugRemoved: (bugs, action) => {
      bugs.filter((bug) => bug.id !== action.payload.id);
    }
  }
})

export const {bugAdded, bugResolved, bugRemoved} = slice.actions
export default slice.reducer
