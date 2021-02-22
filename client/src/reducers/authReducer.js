// 2. create user reducers function

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  // {type:' '. payload:''}
  switch (action.type) {
    case "LOGGED_IN_USER":
      // create new state/ action
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;

    default:
      return state;
  }
};
