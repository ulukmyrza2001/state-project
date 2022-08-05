import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import flag from '../../../assets/icons/Flag_of_Kyrgyzstan.svg'
import gerb from '../../../assets/icons/GERB.svg'
import { scrollHeader } from '../../../utils/helpers/general'
import {
   NAVIGATIONS,
   NAVIGATIONS_MOBILE,
} from '../../../utils/constants/category'
import MobileHeader from './MobileHeader'
import {
   Img,
   InnerWindowMenu,
   MenuBurger,
   StyledFlag,
   WindowMenu,
} from './styles'
import Navigations from './Navigations'
import NavSectionItem from './NavSectionItem'

const Header = () => {
   const { pathname } = useLocation()
   const [headerBackground, setHeaderBackground] = useState(false)
   const [windowMenu, setWindowMenu] = useState(false)
   const [showMenuBurger, setShowMenuBurger] = useState(false)
   const [sections, setSections] = useState({ innerList: [] })

   window.addEventListener('scroll', () => {
      if (scrollHeader()) setHeaderBackground(true)
      else setHeaderBackground(false)
   })

   const headerStyle = pathname !== '/' || headerBackground

   return (
      <HeaderStyled headerStyle={headerStyle}>
         <StyledFlag>
            <Img isScroll={headerStyle} src={gerb} alt="" />
         </StyledFlag>
         <MenuBurger onClick={() => setShowMenuBurger(!showMenuBurger)} />
         <MobileHeader
            isVisible={showMenuBurger}
            navigations={NAVIGATIONS_MOBILE}
         />
         <Navigations
            navigations={NAVIGATIONS}
            onMouseOut={() => setWindowMenu(false)}
            onMouseMove={(e) => {
               setWindowMenu(true)
               setSections(
                  NAVIGATIONS.find((el) => el.id === e.currentTarget.id)
               )
            }}
         />
         <StyledFlag>
            <Img isScroll={headerStyle} src={flag} alt="" />
         </StyledFlag>
         <WindowMenu
            onMouseMove={() => setWindowMenu(true)}
            onMouseOut={() => setWindowMenu(false)}
            windowMenu={windowMenu}
         >
            <InnerWindowMenu>
               <NavSectionItem sections={sections} />
            </InnerWindowMenu>
         </WindowMenu>
      </HeaderStyled>
   )
}
export const HeaderStyled = styled.header`
   position: fixed;
   width: 100%;
   height: ${({ headerStyle }) => (headerStyle ? '60px' : '90px')};
   background-color: ${({ headerStyle }) =>
      headerStyle ? '#011835' : 'transparent'};
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1;
   @media (max-width: 1200px) {
      height: 66px;
   }
   @media (max-width: 800px) {
      background-color: #011835;
      justify-content: space-between;
   }
`

export default Header
