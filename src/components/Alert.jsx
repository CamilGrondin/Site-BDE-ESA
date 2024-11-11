import { useState, useEffect } from 'react';

const Alert = ({ type = 'info', text, autoDismiss = false, autoDismissTime = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, autoDismissTime);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, autoDismissTime]);

  if (!visible) return null;

  const typeStyles = {
    danger: 'bg-red-800',
    success: 'bg-green-800',
    warning: 'bg-yellow-800',
    info: 'bg-blue-800',
  };

  const typeTextStyles = {
    danger: 'bg-red-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  const typeText = {
    danger: 'Warning',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
  };

  return (
    <div className="fixed bottom-5 right-5 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div
        className={`p-2 ${typeStyles[type]} items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex p-5`}
        role="alert">
        <p
          className={`flex rounded-full ${typeTextStyles[type]} uppercase px-2 py-1 text-xs font-semibold mr-3`}>
          {typeText[type]}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
