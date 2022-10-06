/* eslint-disable prettier/prettier */
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ClientLayout from '../components/layout'
import TemplateLeaderShipPages from '../components/temaplate-leadership-pages'
import MainPage from '../pages/main'
import { CLIENT_ROUTES } from '../utils/constants/routes'

// LEADERSHIP
const Government = React.lazy(() => import('../pages/leadership/government'))
const GovernmentApparatus = React.lazy(() =>
   import('../pages/leadership/government-apparatus')
)
const VillageCouncil = React.lazy(() =>
   import('../pages/leadership/village-council')
)
// HEALTHCARE
const Hospital = React.lazy(() => import('../pages/healthcare/hospitals'))
const FAPS = React.lazy(() => import('../pages/healthcare/FAPS'))
const OMs = React.lazy(() => import('../pages/healthcare/OMS'))
const DoctorAdvice = React.lazy(() =>
   import('../pages/healthcare/doctorsAdvice')
)

const ClientRoutes = () => {
   const { MAIN, LEADERSHIP, healthCare } = CLIENT_ROUTES
   const { GOVERNMENT, GOVERNMENT_APPARATUS, VILLAGE_COUNCIL } = LEADERSHIP
   const { hospitals, paramedicPoint, OMS, doctorAdvice } = healthCare

   console.log(healthCare)

   return (
      <Routes>
         <Route element={<ClientLayout />} path={MAIN.path}>
            <Route element={<MainPage />} path={MAIN.path} />
            <Route element={<TemplateLeaderShipPages />}>
               <Route element={<Government />} path={GOVERNMENT.path} />
               <Route
                  element={<GovernmentApparatus />}
                  path={GOVERNMENT_APPARATUS.path}
               />
               <Route
                  element={<VillageCouncil />}
                  path={VILLAGE_COUNCIL.path}
               />
               <Route element={<Hospital />} path={hospitals.path} />
               <Route element={<FAPS />} path={paramedicPoint.path} />
               <Route element={<OMs />} path={OMS.path} />
               <Route element={<DoctorAdvice />} path={doctorAdvice.path} />
            </Route>
         </Route>
      </Routes>
   )
}

export default ClientRoutes
