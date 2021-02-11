import React from 'react';
import './index.scss';

export default function NotificationItem({
  message,
  type,
  width,
  handleStart,
  handleStop,
  handleClose,
  statusClose,
}) {
  return (
    <div
      className={
        statusClose ? `notif notif-${type} notif--exit` : `notif notif-${type}`
      }
      onMouseEnter={handleStop}
      onMouseLeave={handleStart}
    >
      <div className="notif-wrapper">
        <p className="notif__message">{message}</p>
        <div className="notif-close">
          <div
            className="notif-close__btn"
            onClick={handleClose}
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="notif__bar" style={{ width: `${width}%` }} />
    </div>
  );
}
