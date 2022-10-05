/* eslint-disable prettier/prettier */
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ClientLayout from '../components/layout'
import TemplateLeaderShipPages from '../components/temaplate-leadership-pages'
import Schools from '../pages/education/schools'
import MainPage from '../pages/main'
import { CLIENT_ROUTES } from '../utils/constants/routes'

const Government = React.lazy(() => import('../pages/leadership/government'))
const GovernmentApparatus = React.lazy(() =>
   import('../pages/leadership/government-apparatus')
)
const VillageCouncil = React.lazy(() =>
   import('../pages/leadership/village-council')
)

const ClientRoutes = () => {
   const { MAIN, LEADERSHIP, education } = CLIENT_ROUTES

   return (
      <Routes>
         <Route element={<ClientLayout />} path={MAIN.path}>
            <Route element={<MainPage />} path={MAIN.path} />
            <Route element={<TemplateLeaderShipPages />}>
               <Route
                  element={<Government />}
                  path={LEADERSHIP.GOVERNMENT.path}
               />
               <Route
                  element={<GovernmentApparatus />}
                  path={LEADERSHIP.GOVERNMENT_APPARATUS.path}
               />
               <Route
                  element={<VillageCouncil />}
                  path={LEADERSHIP.VILLAGE_COUNCIL.path}
               />
               <Route path={education.schools.path} element={<Schools />} />
            </Route>
         </Route>
      </Routes>
   )
}

export default ClientRoutes
