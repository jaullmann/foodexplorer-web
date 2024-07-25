import { Routes, Route } from 'react-router-dom';

import { CartProvider } from '../hooks/cart';
import { FavoritesProvider } from '../hooks/favorites';
import { SearchProvider } from '../hooks/search';

import { Home } from '../pages/Home'
import { DishDetails } from '../pages/DishDetails'
import { Orders } from '../pages/Orders';
import { Payment } from '../pages/Payment';
import { Favorites } from '../pages/Favorites';
import { SearchResults } from '../pages/SearchResults';
import { NotFound } from '../pages/NotFound';

export function CustomerRoutes() {
  return (
    <SearchProvider>
      <CartProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />      
            <Route path="/description/:dishId" element={<DishDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:orderId" element={<Payment />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/notfound" element={<NotFound />} />

            <Route path="*" exact={true} element={<NotFound />} />
          </Routes>
        </FavoritesProvider>      
      </CartProvider>
    </SearchProvider>        
  )
}