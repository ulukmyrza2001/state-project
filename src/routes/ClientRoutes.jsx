import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ClientLayout from '../components/layout'

const ClientRoutes = () => {
   return (
      <Routes>
         <Route element={<ClientLayout />} path="/" />
      </Routes>
   )
}

export default ClientRoutes
