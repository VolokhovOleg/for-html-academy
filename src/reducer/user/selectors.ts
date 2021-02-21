import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.USER;

const getUserData = (state) => {
  return state[NAME_SPACE].user;
};

export {getUserData};
