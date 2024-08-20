import { Container, Alert } from "./styles";
import { Button } from "../Button";
import { useState, useEffect } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";

export function StyledAlert({ isVisible = false, alertType = "info", message, buttonText = "Fechar" }) { 

  const [showAlert, setShowAlert] = useState(isVisible);

  useEffect(() => {
    setShowAlert(isVisible);
  }, [isVisible]);
  
  return (
    <Container 
      $isActive={showAlert}      
    >
      <div id="alert-container">
        <Alert>
          <div id="icon-message">
            {
              alertType === 'info' &&
              <FiCheckCircle className="info" />
            }
            { 
              alertType === 'warning' &&
              <HiOutlineExclamationCircle className="warning" />
            }
            {
              alertType === 'error' &&
              <FiXCircle className="error" />
            }
            <h1>
              {message}
            </h1>            
          </div>              
          
          <Button
            title={buttonText}
            color={alertType === 'error' || alertType === 'warning' ? "tomato_200" : "mint_200" }
            onClick={() => setShowAlert(false)}
          >            
          </Button>
        </Alert>
      </div>      
    </Container>
  );
};
