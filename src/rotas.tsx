import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { RestaurantProfile } from './pages/RestaurantProfile'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantProfile />} />
  </Routes>
)
