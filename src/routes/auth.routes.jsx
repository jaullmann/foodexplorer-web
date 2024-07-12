import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { NotFound } from '../pages/NotFound';

export function AuthRoutes() {
  const user = localStorage.getItem("@foodexplorer:user");

  return (
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/register" element={<SignUp/>} />
      
      { !user && <Route path="*" exact={true} element={<NotFound />} /> }
    </Routes>
  )
}