/* eslint-disable no-return-assign */
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import WindowMenuImage from '../../../assets/images/windowMenu.webp'
import Button from '../../UI/buttons/Button'
import { NAVIGATIONS_BOTTOM } from '../../../utils/constants/category'
import {
   InnerWindowMenu,
   List,
   NavButton,
   NavIconWrapper,
   StyledFlag,
   WindowMenu,
} from './styles'

const HeaderBottom = () => {
   const [windowMenu, setWindowMenu] = useState(false)
   const [sections, setSections] = useState({ innerList: [] })

   const visibleMenuHandler = () => setWindowMenu(true)

   const hideMenuHandler = () => setWindowMenu(false)

   return (
      <HeaderStyled windowMenu={windowMenu}>
         <StyledFlag />
         <List>
            {NAVIGATIONS_BOTTOM.map((item) => (
               <NavButton
                  key={item.id}
                  id={item.id}
                  onMouseMove={(e) => {
                     visibleMenuHandler()
                     setSections(
                        NAVIGATIONS_BOTTOM.find(
                           (el) => el.id === e.currentTarget.id
                        )
                     )
                  }}
                  onMouseOut={hideMenuHandler}
               >
                  {item.title}
                  <span />
                  <NavIconWrapper>
                     <IoIosArrowDown fontSize={20} />
                  </NavIconWrapper>
               </NavButton>
            ))}
         </List>
         <StyledFlag />
         <WindowMenu
            isBottom
            onMouseMove={visibleMenuHandler}
            onMouseOut={hideMenuHandler}
            windowMenu={windowMenu}
            image={WindowMenuImage}
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

const HeaderStyled = styled.header`
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 70px;
   background-color: ${({ windowMenu }) =>
      windowMenu ? '#011835' : 'transparent'};
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 800px) {
      display: none;
   }
`
export default HeaderBottom
