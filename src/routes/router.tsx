import { Routes, Route } from "react-router-dom"
import React, { useState, useEffect } from 'react'

//Estilos
import '../styles/App.css'

//Paginas
import Home from '../pages/Home'
import Workouts from '../pages/Workouts'
import Nutrition from "../pages/Nutrition"
import Results from "../pages/Results"
import Programs from "../pages/Programs"
import Calendar from "../pages/Calendar"
import Chat from "../pages/Chat"
import Marketplace from "../pages/Marketplace"
import Financials from "../pages/Financials"
import Files from "../pages/Files"
import Forms from "../pages/Forms"
import Settings from "../pages/Settings"
import Login from "../pages/Login"

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/results" element={<Results />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/financials" element={<Financials />} />
      <Route path="/files" element={<Files />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router
