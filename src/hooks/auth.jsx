import { api } from "../services/api";
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    
    const [data, setData] = useState({});    
    const [role, setRole] = useState("customer");    
  
    async function signIn({ email, password }) {
  
      try {      
        const response = await api.post(
          "/sessions", 
          { email, password },
          { withCredentials: true },
        );
        const { user } = response.data;        
                
        localStorage.setItem("@foodexplorer:user", JSON.stringify(user));        

        setRole(user.role);                  
        setData({ user });                
        
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível efetuar o login.");
        }
      }
    } 
      
    function signOut() {
      localStorage.removeItem("@foodexplorer:user");            
      setData({});
    }    
  
    async function updateProfile({ user }) {
      try {                  
        await api.put("/users", user);
        localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
        setData({ user });
        alert("Perfil atualizado com sucesso!");
        return true;
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível atualizar os dados do perfil.");
          return false;
        }
      }    
    }
      
    useEffect(() => {          
      const user = localStorage.getItem("@foodexplorer:user");
  
      if (user) { 
        setData({          
          user: JSON.parse(user)
        });
      }
    }, []);
            
    return (
      <AuthContext.Provider value={{ 
        signIn, 
        signOut,
        updateProfile,
        user: data.user,
        role             
      }}>
        {children}
      </AuthContext.Provider>
    )
  }
  
  function useAuth() {
    const context = useContext(AuthContext);
  
    return context;
  }
  
  export  { AuthProvider, useAuth };