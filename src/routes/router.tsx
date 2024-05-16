import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Workouts from '../pages/Workouts'
import '../App.css'

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/workouts" element={<Workouts />} />
    </Routes>
  );
};

export default Router
