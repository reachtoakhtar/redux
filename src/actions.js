/**
 * Created by Akhtar on 22/03/2020.
 */

import * as actions from './actionTypes';

export const bugAdded = description => ({
  type: actions.BUG_ADDED,
  payload: { description }
})

export const bugRemoved = id => ({
  type: actions.BUG_REMOVED,
  payload: { id }
})

export const bugResolved = id => ({
  type: actions.BUG_RESOLVED,
  payload: { id }
})
