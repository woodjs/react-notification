import React from 'react';
import { useSelector } from 'react-redux';
// Components
import Notificaton from '../../components/Notification';
import NotificationItemContainer from '../NotificationItemContainer';

function NotificationContainer() {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  return (
    <Notificaton>
      {notifications.map((item) => (
        <NotificationItemContainer key={item.id} id={item.id} {...item} />
      ))}
    </Notificaton>
  );
}

export default NotificationContainer;
