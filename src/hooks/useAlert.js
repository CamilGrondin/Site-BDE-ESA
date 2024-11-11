import { useState } from 'react';

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger', autoDismiss: false });

  const showAlert = ({ text, type = 'danger', autoDismiss }) => setAlert({ show: true, text, type, autoDismiss });
  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
