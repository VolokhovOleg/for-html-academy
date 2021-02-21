import {ActionType, ActionCreator} from './actions';
import NameSpace from '../name-space';
import {extend} from '../../utils';

const NAME_SPACE_USER: string = NameSpace.USER;

const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_DATA:
      return extend(state, {user: action.payload});
  }

  return state;
};

const Operation = {
  setUserData: (userData) => (dispatch, getState) => {
    dispatch(ActionCreator.setUserData());
  },
};

export {reducer, Operation, ActionType, ActionCreator};
