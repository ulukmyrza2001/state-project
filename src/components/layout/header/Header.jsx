import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import gerb from '../../../assets/icons/GERB.svg'
import madyLogo from '../../../assets/icons/logoMady.png'
import { scrollHeader } from '../../../utils/helpers/general'
import { NAVIGATIONS } from '../../../utils/constants/category'
import MobileHeader from './MobileHeader'
import {
   Img,
   InnerWindowMenu,
   Logo,
   MenuBurger,
   StyledFlag,
   WindowMenu,
} from './styles'
import Navigations from './Navigations'
import NavSectionItem from './NavSectionItem'
import { CATEGORYES } from '../../../utils/constants/categoryes'

const Header = () => {
   const { pathname } = useLocation()
   const [isScroll, setIsScroll] = useState(false)
   const [windowMenu, setWindowMenu] = useState(false)
   const [showMenuBurger, setShowMenuBurger] = useState(false)
   const [sections, setSections] = useState({ innerList: [] })

   window.addEventListener('scroll', () => {
      if (scrollHeader()) setIsScroll(true)
      else setIsScroll(false)
   })

   const mouseMoveHandler = (e) => {
      setWindowMenu(e.currentTarget.id)
      setSections(NAVIGATIONS.find((el) => el.id === e.currentTarget.id))
   }

   const mouseOutHandler = () => setWindowMenu(false)

   const headerHeight = pathname !== '/' || isScroll

   const headerBackground = windowMenu || pathname !== '/' || isScroll

   return (
      <HeaderStyled
         headerBackground={headerBackground}
         headerHeight={headerHeight}
      >
         <MobileHeader
            isVisible={showMenuBurger}
            navigations={CATEGORYES}
            setShowMenuBurger={setShowMenuBurger}
         />
         <StyledFlag>
            <Link to="/">
               <Logo
                  isScroll={headerHeight}
                  src={madyLogo}
                  style={{ cursor: 'pointer' }}
               />
            </Link>
         </StyledFlag>
         <MenuBurger onClick={() => setShowMenuBurger(!showMenuBurger)} />
         <Navigations
            sections={sections}
            windowMenu={windowMenu}
            setWindowMenu={setWindowMenu}
            headerBackground={headerBackground}
            navigations={NAVIGATIONS}
            onMouseOut={mouseOutHandler}
            onMouseMove={mouseMoveHandler}
         />
         <StyledFlag className="gerb">
            <Img isScroll={headerHeight} src={gerb} alt="" />
         </StyledFlag>
      </HeaderStyled>
   )
}
export const HeaderStyled = styled.header`
   position: fixed;
   width: 100%;
   height: ${({ headerHeight }) => (headerHeight ? '60px' : '90px')};
   background: ${({ headerBackground }) =>
      !headerBackground
         ? 'transparent'
         : ' linear-gradient(-45deg, #1b1374, #011835)'};
   background-size: 400% 400%;
   animation: gradientBG 15s ease infinite;
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
      .gerb {
         display: none;
      }
   }
`

export default Header
