import {
  createAction,
  handleActions,
} from 'redux-actions'

// Constants
export const constants = {
  ALIVE: Symbol('ALIVE'),
  SHOT: Symbol('SHOT'),
};

// Action Creators
export const actions = {
  shoot: createAction( 'SHOOT' ),
};

// Reducer
export const defaultState = {
  state: constants.ALIVE,
};

export default handleActions( {
  [ actions.shoot ]: s => ( { ...s, state: constants.SHOT } ),
}, defaultState )

