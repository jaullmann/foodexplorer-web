import { createContext, useContext, useState } from "react";

const AlertsContext = createContext({});

function AlertsProvider({ children }) {

    const [isVisible, setIsVisible] = useState(false);
    const [alertData, setAlertData] = useState({});
  
    function showAlert({ message, type = "error", buttonText = "Fechar"}) {
        setAlertData({
            message,
            type,
            buttonText
        })
        setIsVisible(true);
    }
  
    function hideAlert() {
        setIsVisible(false);        
    } 

    return (
        <AlertsContext.Provider value={{
            isVisible,
            alertData,
            showAlert,
            hideAlert            
        }}>
            { children }
        </AlertsContext.Provider>
    )
}

function useAlerts() {
    return useContext(AlertsContext);
}

export { AlertsProvider, useAlerts };

