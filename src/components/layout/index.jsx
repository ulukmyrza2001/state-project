import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import ContainerHeader from './header/ContainerHeader'
import Footer from './footer/Footer'

const LayoutClient = () => {
   return (
      <>
         <ContainerHeader />
         <Main>
            <Outlet />
         </Main>
         <Footer />
      </>
   )
}
const Main = styled.div`
   min-height: ${`${window.innerHeight}px`};
   width: 100%;
`

export default LayoutClient
