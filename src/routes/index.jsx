import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes() {
  const { user, role, signOut } = useAuth();

  useEffect(() => {
    api
      .get('/users/validated')
      .catch((error) => {
        console.log(error)
        if (error.response?.status === 401) {
          signOut();
        }
      })
  }, []);

  function AccessRoute() {
    switch (role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }

  return (
    <BrowserRouter>      
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  )
}