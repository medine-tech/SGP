import React, { useEffect, useState } from 'react';
import './alert.scss';

type AlertType = 'success' | 'danger';

interface FloatingAlertProps {
  message: string;
  type: AlertType;
}

const Alert: React.FC<FloatingAlertProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`floating-alert ${type}`}>
      <span className="message">{message}</span>
    </div>
  );
};

export default Alert;