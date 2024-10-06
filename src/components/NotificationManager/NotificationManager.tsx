'use client';

import { useEffect, useState } from 'react';

export default function NotificationManager() {
  const [permission, setPermission] = useState<NotificationPermission>();

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const askPermission = async () => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
    }
  };

  return (
    <div style={{ height: '20px' }}>
      {permission === 'default' && (
        <button onClick={askPermission}>Enable Notifications</button>
      )}
      {permission === 'granted' && <p>Notifications are enabled</p>}
      {permission === 'denied' && <p>Notifications are blocked</p>}
    </div>
  );
}
