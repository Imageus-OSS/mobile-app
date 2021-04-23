import { createContext } from 'react';

const UserDispatchContext = createContext(null);

function userReducer(state, action) {
  switch (action.type) {
    case 'setUser':
      return action.payload;
    default:
      throw new Error('Invalid user reducer action.');
  }
}

export { UserDispatchContext as default, userReducer };
