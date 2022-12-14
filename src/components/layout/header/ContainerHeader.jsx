import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import HeaderBottom from './HeaderBottom'

const ContainerHeader = () => {
   const { pathname } = useLocation()
   return (
      <>
         <Header />
         <HeaderBottom />
      </>
   )
}

export default ContainerHeader
