import React from "react"
import { Routes, Route } from "react-router-dom"

//Paginas
import Home from '../pages/Home'
import Workouts from '../pages/Workouts'
import Nutrition from "../pages/Nutrition"
import Results from "../pages/Results"
import Programs from "../pages/Programs"
import Calendar from "../pages/Calendar"
import Settings from "../pages/Settings"
import Login from "../pages/Login"
import HomeM from "../admin/HomeM"
import ClientsM from "../admin/ClientsM"
import WorkoutsM from "../admin/WorkoutsM"
import NutritionM from "../admin/NutritionM"
import ChatsM from "../admin/ChatsM"
import AllWorkoutsAssigned from "../admin/AllWorkoutsAssigned"
import AllHabitsAssigned from "../admin/AllHabitsAssigned"
import Habits from "../pages/Habits"
import ProtectedRoutes from "../utils/ProtectedRoutes"

export const Router:React.FC<{isAuthenticated:boolean}> = ({isAuthenticated}) => {
  return (
    <Routes>

      {/* Paginas de login */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />

      {/* Paginas protegidas */}
      <Route path="/" element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>

        {/* Paginas de usuario */}
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/results" element={<Results />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/hábitos" element={<Habits />} />

        {/* Paginas de master */}
        <Route path="/master" element={<HomeM />} />
        <Route path="/master/clientes" element={<ClientsM />} />
        <Route path="/master/entrenamientos" element={<WorkoutsM />} />
        <Route path="/master/nutrición" element={<NutritionM />} />
        <Route path="/master/chats" element={<ChatsM />} />
        <Route path="/master/entrenamientos de hoy" element={<AllWorkoutsAssigned />} />
        <Route path="/master/hábitos de hoy" element={<AllHabitsAssigned />} />

      </Route>
    </Routes>
  );
};

export default Router
