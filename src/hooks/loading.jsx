import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({});

function LoadingProvider({ children }) {

    const [loading, setLoading] = useState(false);
  
    function showLoading() {
      setLoading(true);
    }
  
    function hideLoading() {
      setLoading(false);
    }

    return (
        <LoadingContext.Provider value={{
            showLoading,
            hideLoading
        }}>
            { children }
        </LoadingContext.Provider>
    )
}

function useLoading() {
    return useContext(LoadingContext);
}

export { LoadingProvider, useLoading };

