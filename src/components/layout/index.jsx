import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import ContainerHeader from './header/ContainerHeader'
import Footer from './footer/Footer'
import photoMady from '../../assets/images/mady.jpg'

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
   background: url(${photoMady});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
`

export default LayoutClient
