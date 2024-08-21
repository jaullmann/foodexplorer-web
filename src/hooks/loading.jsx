import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({});

function LoadingProvider({ children }) {

    const [visibility, setVisibility] = useState(false);
      
    function setIsLoading(isVisible) {
        setVisibility(isVisible);        
    } 

    return (
        <LoadingContext.Provider value={{
            visibility,
            setIsLoading            
        }}>
            { children }
        </LoadingContext.Provider>
    )
}

function useLoading() {
    return useContext(LoadingContext);
}

export { LoadingProvider, useLoading };