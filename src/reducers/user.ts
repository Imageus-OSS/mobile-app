import { User } from '../types';

type UserAction = {
  type: 'setUser';
  payload: User;
};

function userReducer(_state: User, action: UserAction): User {
  switch (action.type) {
  case 'setUser':
    return {
      ...action.payload,
    };
  default:
    throw new Error(`Invalid User reducer action ${action}`);
  }
}

export default userReducer;
