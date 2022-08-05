import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ClientLayout from '../components/layout'
import MainPage from '../pages/main'
import { CLIENT_ROUTES } from '../utils/constants/routes'

const Government = React.lazy(() => import('../pages/leadership/government'))
const GovernmentApparatus = React.lazy(
   () => import('../pages/leadership/government-apparatus')
)
const VillageCouncil = React.lazy(
   () => import('../pages/leadership/village-council')
)

const ClientRoutes = () => {
   const { MAIN, LEADERSHIP } = CLIENT_ROUTES
   const { GOVERNMENT, GOVERNMENT_APPARATUS, VILLAGE_COUNCIL } = LEADERSHIP
   return (
      <Routes>
         <Route element={<ClientLayout />} path={MAIN.path}>
            <Route element={<MainPage />} path={MAIN.path} />
            <Route element={<Government />} path={GOVERNMENT.path} />
            <Route
               element={<GovernmentApparatus />}
               path={GOVERNMENT_APPARATUS.path}
            />
            <Route element={<VillageCouncil />} path={VILLAGE_COUNCIL.path} />
         </Route>
      </Routes>
   )
}

export default ClientRoutes
