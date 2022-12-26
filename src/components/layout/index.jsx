import React from 'react'
import styled from 'styled-components'
import { Outlet, useLocation } from 'react-router-dom'
import ContainerHeader from './header/ContainerHeader'
import Footer from './footer/Footer'

const LayoutClient = () => {
   const { pathname } = useLocation()

   const isVisibleFooter = pathname === '/'

   return (
      <>
         <ContainerHeader />
         <Main>
            <Outlet />
         </Main>
         {isVisibleFooter && <Footer />}
      </>
   )
}
const Main = styled.div`
   min-height: 100vh;
   width: 100%;
`

export default LayoutClient
