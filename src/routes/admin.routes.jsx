import { Routes, Route } from 'react-router-dom';

import { SearchProvider } from '../hooks/search';
import { FavoritesProvider } from '../hooks/favorites';

import { Home } from '../pages/Home'
import { DishCreation } from '../pages/DishCreation'
import { DishDetails } from '../pages/DishDetails'
import { Orders } from '../pages/Orders';
import { Payment } from '../pages/Payment';
import { SearchResults } from '../pages/SearchResults';
import { Favorites } from '../pages/Favorites';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {
  return (
    <SearchProvider>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<DishCreation />} />
          <Route path="/edit/:dishId" element={<DishCreation />} />
          <Route path="/description/:dishId" element={<DishDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:orderId" element={<Payment />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/notfound" element={<NotFound />} />

          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </FavoritesProvider>      
    </SearchProvider>    
  )
}