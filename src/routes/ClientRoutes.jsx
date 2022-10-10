/* eslint-disable prettier/prettier */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ClientLayout from '../components/layout'
import TemplateLeaderShipPages from '../components/temaplate-leadership-pages'
import MainPage from '../pages/main'
import Prayer from '../pages/religions/prayer'
import { CLIENT_ROUTES } from '../utils/constants/routes'

// LEADERSHIP
const Government = React.lazy(() => import('../pages/leadership/government'))
const GovernmentApparatus = React.lazy(() =>
   import('../pages/leadership/government-apparatus')
)
const VillageCouncil = React.lazy(() =>
   import('../pages/leadership/village-council')
)
const InnerPageLeadership = React.lazy(() =>
   import('../pages/leadership/inner-page')
)
// HEALTHCARE
const Hospital = React.lazy(() => import('../pages/healthcare/hospitals'))
const Phaps = React.lazy(() => import('../pages/healthcare/FAPS'))
const OMs = React.lazy(() => import('../pages/healthcare/OMS'))
const DoctorAdvice = React.lazy(() =>
   import('../pages/healthcare/doctorsAdvice')
)
// HEALTHCARE INNER PAGES
const InnerPhapPage = React.lazy(() =>
   import('../pages/healthcare/innerPhapPage/index')
)
const InnerHospitalsPage = React.lazy(() =>
   import('../pages/healthcare/innerHospitalsPages')
)
const InnerOmsPage = React.lazy(() =>
   import('../pages/healthcare/innerOmsPage')
)
const InnerDoctorsAdvice = React.lazy(() =>
   import('../pages/healthcare/innerDoctorsAdvice')
)
// SCHOOLS
const Schools = React.lazy(() => import('../pages/education/schools'))
const InnerPageSchools = React.lazy(() =>
   import('../pages/education/inner-page-schools')
)
const DrivingSchools = React.lazy(() =>
   import('../pages/education/driving-schools')
)
const InnerPageDrivingSchools = React.lazy(() =>
   import('../pages/education/inner-page-driving-schools')
)
const Circles = React.lazy(() => import('../pages/education/circles'))
const InnerPageCircles = React.lazy(() =>
   import('../pages/education/inner-page-circles')
)
const Olympiads = React.lazy(() => import('../pages/education/olympiads'))
const InnerPageOlympiads = React.lazy(() =>
   import('../pages/education/inner-page-olympiads')
)
const Kindergartens = React.lazy(() =>
   import('../pages/education/kindergartens')
)
const InnerPageKindergartens = React.lazy(() =>
   import('../pages/education/inner-page-kindergartens')
)
const GRT = React.lazy(() => import('../pages/education/GRT'))
const InnerPageGRT = React.lazy(() =>
   import('../pages/education/inner-page-grt')
)
const Events = React.lazy(() => import('../pages/education/events'))
const InnerPageEvents = React.lazy(() =>
   import('../pages/education/inner-page-events')
)

const ClientRoutes = () => {
   const { MAIN, LEADERSHIP, education, healthCare, religiousAffairs } =
      CLIENT_ROUTES

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
               <Route element={<Hospital />} path={healthCare.hospitals.path} />
               <Route
                  element={<Phaps />}
                  path={healthCare.paramedicPoint.path}
               />
               <Route element={<OMs />} path={healthCare.OMS.path} />
               <Route
                  element={<DoctorAdvice />}
                  path={healthCare.doctorAdvice.path}
               />

               <Route path={education.schools.path} element={<Schools />} />
               <Route
                  path={education.drivingSchool.path}
                  element={<DrivingSchools />}
               />
               <Route path={education.iyrymder.path} element={<Circles />} />
               <Route path={education.olympiads.path} element={<Olympiads />} />
               <Route
                  path={education.kindergartens.path}
                  element={<Kindergartens />}
               />
               <Route path={education.GRT.path} element={<GRT />} />
               <Route path={education.аctivities.path} element={<Events />} />
               {/* --------- */}
               <Route
                  path={religiousAffairs.prayer.path}
                  element={<Prayer />}
               />
            </Route>
            {/* ============================ */}
            <Route
               path={LEADERSHIP.INNER_PAGE_GOVERNMENT_APPARATUS.path}
               element={<InnerPageLeadership />}
            />
            <Route
               path={LEADERSHIP.INNER_PAGE_VILLAGE_COUNCIL.path}
               element={<InnerPageLeadership />}
            />
            {/* ============================ */}
            <Route
               path={education.innerPageSchools.path}
               element={<InnerPageSchools />}
            />
            <Route
               path={education.innerPageDrivingSchools.path}
               element={<InnerPageDrivingSchools />}
            />
            <Route
               path={education.innerPageDrivingSchools.path}
               element={<InnerPageDrivingSchools />}
            />
            <Route
               path={education.innerPageCircles.path}
               element={<InnerPageCircles />}
            />
            <Route
               path={education.innerPageOlympiads.path}
               element={<InnerPageOlympiads />}
            />
            <Route
               path={education.innerPageKindergartens.path}
               element={<InnerPageKindergartens />}
            />
            <Route
               path={education.innerPageGRT.path}
               element={<InnerPageGRT />}
            />
            <Route
               path={education.innerPageActivities.path}
               element={<InnerPageEvents />}
            />
            {/* HEALSCARE INNER PAGES */}
            <Route
               path={healthCare.innerPageHospitals.path}
               element={<InnerHospitalsPage />}
            />
            <Route
               path={healthCare.innerPageParamedicPoint.path}
               element={<InnerPhapPage />}
            />
            <Route
               path={healthCare.innerPageOMS.path}
               element={<InnerOmsPage />}
            />
            <Route
               path={healthCare.innerPageDoctorAdvice.path}
               element={<InnerDoctorsAdvice />}
            />
         </Route>
      </Routes>
   )
}

export default ClientRoutes
