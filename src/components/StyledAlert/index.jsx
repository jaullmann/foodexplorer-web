import { Container, Alert } from "./styles";
import { Button } from "../Button";
import { useAlerts } from "../../hooks/alerts";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { PiCheckCircle } from "react-icons/pi";
import { FiXCircle } from "react-icons/fi";

export function StyledAlert() { 
  
  const { alertData, isVisible, hideAlert } = useAlerts();
  
  return (
    <Container 
      $isActive={isVisible}      
    >
      <div id="alert-container">
        <Alert>
          <span className="sr-only">{`Pop-up de alerta ao usuário: ${alertData.message}`}</span>
          <div id="icon-message">
            {
              alertData.type === 'info' &&
              <PiCheckCircle className="info" />
            }
            { 
              alertData.type === 'warning' &&
              <HiOutlineExclamationCircle className="warning" />
            }
            {
              alertData.type === 'error' &&
              <FiXCircle className="error" />
            }
            <h1>
              {alertData.message}
            </h1>            
          </div>              
          
          <Button
            id="alert-btn"
            title={alertData.buttonText}
            color={alertData.type === 'error' || alertData.type === 'warning' ? "tomato_200" : "mint_200" }
            onClick={hideAlert}
          >
            <span className="sr-only">Botão para fechar mensagem pop-up</span>             
          </Button>
        </Alert>
      </div>      
    </Container>
  );
};
