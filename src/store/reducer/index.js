const INITIAL_STATE = {
  user: [
    {
      username: 'harshvithal',
      email: 'harshvithal1@gmail.com',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGESTACK':
      return {
        ...state,
        user: [...state.user, action.payload],
      };
  }
  return state;
};
