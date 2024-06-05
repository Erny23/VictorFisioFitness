import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const protectedRoutes:React.FC<{isAuthenticated:boolean}> = ({isAuthenticated}) => {
    return (
        isAuthenticated ? ( <Outlet /> ) : ( <Navigate to='/' replace /> )
    )
}

export default protectedRoutes