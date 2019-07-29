import {
  combineReducers,
} from 'redux'

import {
  createAction,
  handleActions,
} from 'redux-actions'

import duckR, {
  actions as duckActions,
  defaultState as defaultDuck,
} from './duck'

// Constants
export const constants = {
};

// Action Creators
export const actions = {
  ...duckActions,
};

// Reducer
export const defaultState = {
  ducks: [ {
    ...defaultDuck,
    id: 1,
    speed: 1,
  }, {
    ...defaultDuck,
    id: 2,
    speed: 1,
  } ],
}

export const handleDucks = handleActions( {
  [ duckActions.shoot ]: ( ducks, action ) => {
    const id = action.payload
    return ducks.map( d => d.id === id ?
      duckR( d, action ) : d )
  },
}, defaultState.ducks )

export default combineReducers( {
  ducks: handleDucks,
} )
