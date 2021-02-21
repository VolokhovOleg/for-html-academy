const ActionType = {
  SET_USER_DATA: `SET_USER_DATA`,
};

const ActionCreator = {
  setUserData: (data) => ({
    type: ActionType.SET_USER_DATA,
    payload: data,
  }),
};

export {ActionType, ActionCreator};
