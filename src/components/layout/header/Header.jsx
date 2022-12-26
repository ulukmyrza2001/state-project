import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import gerb from '../../../assets/icons/GERB.svg'
import { scrollHeader } from '../../../utils/helpers/general'
import { NAVIGATIONS } from '../../../utils/constants/category'
import MobileHeader from './MobileHeader'
import { Img, MenuBurger, StyledFlag } from './styles'
import Navigations from './Navigations'
import { CATEGORYES } from '../../../utils/constants/categoryes'
import Logotip from '../../logo'

const Header = () => {
   const { pathname } = useLocation()
   const [isScroll, setIsScroll] = useState(false)
   const [showMenuBurger, setShowMenuBurger] = useState(false)

   const scrollHandler = useCallback(() => {
      if (scrollHeader()) setIsScroll(true)
      else setIsScroll(false)
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', () => scrollHandler())

      return () => window.removeEventListener('scroll', scrollHandler)
   }, [scrollHandler])

   const headerHeight = pathname !== '/' || isScroll

   const headerBackground = pathname !== '/' || isScroll

   return (
      <HeaderStyled
         headerBackground={headerBackground}
         headerHeight={headerHeight}
         isVisible={showMenuBurger}
      >
         <MobileHeader
            isVisible={showMenuBurger}
            navigations={CATEGORYES}
            setShowMenuBurger={setShowMenuBurger}
         />
         <StyledFlag>
            <Link to="/">
               <Logotip isScroll={headerHeight} />
            </Link>
         </StyledFlag>
         <MenuBurger onClick={() => setShowMenuBurger(!showMenuBurger)} />
         <Navigations
            headerBackground={headerBackground}
            navigations={NAVIGATIONS}
         />
         <StyledFlag className="gerb">
            <Img isScroll={headerHeight} src={gerb} alt="" />
         </StyledFlag>
      </HeaderStyled>
   )
}
export const HeaderStyled = styled.header`
   position: fixed;
   z-index: 10;
   width: 100%;
   height: ${({ headerHeight }) => (headerHeight ? '60px' : '90px')};
   background: ${({ headerBackground }) =>
      !headerBackground
         ? 'transparent'
         : ' linear-gradient(-45deg, #022755, #041935)'};
   background-size: 400% 400%;
   animation: gradientBG 15s ease infinite;
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 1200px) {
      height: 66px;
   }
   @media (max-width: 800px) {
      background-color: ${({ isVisible }) =>
         isVisible ? '#011835' : 'transparent'};
      justify-content: space-between;
      .gerb {
         display: none;
      }
   }
`

export default Header
