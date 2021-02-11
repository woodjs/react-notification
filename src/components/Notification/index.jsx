import React from 'react';
import './index.scss';
import NotificationItem from './NotificationItem';

export default function Notification({ children }) {
  return <div className="notifications">{children}</div>;
}
