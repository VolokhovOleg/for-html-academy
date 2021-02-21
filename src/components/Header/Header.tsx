import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserData} from '../../reducer/user/selectors';
import {Operation as UserOperation} from '../../reducer/user/user';

const App: React.FC = () => {
  // const userName = useSelector(getUserData);
  // const dispatch = useDispatch();
  // const onPrintName = (evt: React.ChangeEvent<HTMLInputElement>) => dispatch(UserOperation.setUserData(evt.target.value));
  return <>

  </>
};

export default App;
