import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from './types';

const initialState = {
  notifications: [
    {
      id: 1,
      message: 'Вы успешно авторизовались',
      type: 'success',
    },
    {
      id: 2,
      message: 'Вы успешно авторизовались',
      type: 'warn',
    },
    {
      id: 3,
      message: 'Вы успешно авторизовались',
      type: 'danger',
    },
  ],
};

const notificationReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          state.notifications.concat([action.payload]),
        ],
      };
    case DELETE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default notificationReducer;
