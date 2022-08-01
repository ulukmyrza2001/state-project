/* eslint-disable no-return-assign */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import { useLocation } from 'react-router-dom'
import flag from '../../../assets/icons/Flag_of_Kyrgyzstan.svg'
import gerb from '../../../assets/icons/GERB.svg'
import Button from '../../UI/buttons/Button'
import { scrollHeader } from '../../../utils/helpers/general'
import { NAVIGATIONS } from '../../../utils/constants/category'
import MobileHeader from './MobileHeader'
import {
   Img,
   InnerWindowMenu,
   List,
   MenuBurger,
   NavButton,
   NavIconWrapper,
   StyledFlag,
   WindowMenu,
} from './styles'

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

   const headerStyle = pathname !== '/' || windowMenu || headerBackground

   return (
      <HeaderStyled headerStyle={headerStyle}>
         <StyledFlag>
            <Img isScroll={headerStyle} src={gerb} alt="" />
         </StyledFlag>
         <MenuBurger onClick={() => setShowMenuBurger(!showMenuBurger)} />
         <MobileHeader isVisible={showMenuBurger} />
         <List>
            {NAVIGATIONS.map((item) => (
               <NavButton
                  key={item.id}
                  id={item.id}
                  onMouseMove={(e) => {
                     setWindowMenu(true)
                     setSections(
                        NAVIGATIONS.find((el) => el.id === e.currentTarget.id)
                     )
                  }}
                  onMouseOut={() => setWindowMenu(false)}
               >
                  {item.title}
                  <span />
                  <NavIconWrapper>
                     <IoIosArrowDown fontSize={14} />
                  </NavIconWrapper>
               </NavButton>
            ))}
         </List>
         <StyledFlag>
            <Img isScroll={headerStyle} src={flag} alt="" />
         </StyledFlag>
         <WindowMenu
            onMouseMove={() => setWindowMenu(true)}
            onMouseOut={() => setWindowMenu(false)}
            windowMenu={windowMenu}
         >
            <InnerWindowMenu>
               {sections.innerList.map((el) => (
                  <Button key={el.id}>{el.title}</Button>
               ))}
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
