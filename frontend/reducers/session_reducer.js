import { RECEIVE_CURRENT_USER }
  from '../actions/session_actions.js';

import { RECEIVE_ERRORS } from '../actions/error_actions';

import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, _nullUser, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default sessionReducer;
