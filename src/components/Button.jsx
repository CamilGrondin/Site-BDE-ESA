import Alert from "../components/Alert";

import useAlert from '../hooks/useAlert.js';

const Button = ({ name, isBeam = false, containerClass, action = 'buy' }) => {
  const { alert, showAlert } = useAlert();

  const handleClicked = () => {
    if (action == 'buy') return;
    
    else if (action == 'dev'){
      showAlert({
        show: true,
        text: "L'ouverture de la boutique est prévue pour le Lundi 4 novembre 2024.",
        type: 'info',
        autoDismiss: true,
      });
    }

    else if (action == 'soldout'){
      showAlert({
        show: true,
        text: "Désolé, ce produit est en rupture de stock.",
        type: 'error',
        autoDismiss: true,
      });
    }

    else if (action == 'comingsoon'){
      showAlert({
        show: true,
        text: "Ce produit sera bientôt disponible.",
        type: 'info',
        autoDismiss: true,
      });
    }
  };

  return (
    <div>
      {alert.show && <Alert {...alert} />}
      <button className={`btn ${containerClass}`} onClick={handleClicked} >
        {isBeam ? (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        ) : (
          <span className="relative flex h-3 w-3">
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        )}
        {name}
      </button>
    </div>
  );
};

export default Button;
