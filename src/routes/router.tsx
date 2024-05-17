import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Other from '../pages/Other'
import '../App.css'

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/other" element={<Other />} />
    </Routes>
  );
};

export default Router
