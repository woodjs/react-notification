import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotificationItem from '../../components/Notification/NotificationItem';
import { deleteNotifcation } from '../../redux/actions';

export default function NotificationItemContainer({ id, message, type }) {
  const dispatch = useDispatch();
  const idNotification = id;
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);
  const [status, setStatus] = useState(true);
  const [exit, setExit] = useState(false);

  const handleStartTimer = () => {
    if (status) {
      const idInterval = setInterval(() => {
        setWidth((prev) => {
          if (prev < 100) {
            return prev + 0.5;
          }
          return prev;
        });
      }, 20);
      setIntervalID(idInterval);
    }
  };

  const handleStopTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handleStopTimer();
    setStatus(false);
    setExit(true);
    setTimeout(() => {
      dispatch(deleteNotifcation(idNotification));
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
    handleStopTimer();
  }, []);

  return (
    <NotificationItem
      message={message}
      type={type}
      width={width}
      handleStart={handleStartTimer}
      handleStop={handleStopTimer}
      handleClose={handleCloseNotification}
      statusClose={exit}
    />
  );
}
