import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from './types';

export function addNotification(notification) {
  return {
    type: ADD_NOTIFICATION,
    payload: notification,
  };
}

export function deleteNotifcation(id) {
  console.log(id);
  return {
    type: DELETE_NOTIFICATION,
    payload: id,
  };
}
