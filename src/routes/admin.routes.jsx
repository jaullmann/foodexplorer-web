import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { DishCreation } from '../pages/DishCreation'
import { DishDetails } from '../pages/DishDetails'
import { Orders } from '../pages/Orders';
import { Payment } from '../pages/Payment';
import { Favorites } from '../pages/Favorites';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<DishCreation />} />
      <Route path="/upddate/:dish_id" element={<DishCreation />} />
      <Route path="/description/:dish_id" element={<DishDetails />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  )
}