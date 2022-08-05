import React, { useState } from 'react'
import styled from 'styled-components'
import { NAVIGATIONS_BOTTOM } from '../../../utils/constants/category'
import { InnerWindowMenu, StyledFlag, WindowMenu } from './styles'
import Navigations from './Navigations'
import NavSectionItem from './NavSectionItem'

const HeaderBottom = () => {
   const [windowMenu, setWindowMenu] = useState(false)
   const [sections, setSections] = useState({ innerList: [] })

   const visibleMenuHandler = () => setWindowMenu(true)

   const hideMenuHandler = () => setWindowMenu(false)

   return (
      <HeaderStyled windowMenu={windowMenu}>
         <StyledFlag />
         <Navigations
            navigations={NAVIGATIONS_BOTTOM}
            onMouseOut={() => setWindowMenu(false)}
            onMouseMove={(e) => {
               setWindowMenu(true)
               setSections(
                  NAVIGATIONS_BOTTOM.find((el) => el.id === e.currentTarget.id)
               )
            }}
         />
         <StyledFlag />
         <WindowMenu
            isBottom
            onMouseMove={visibleMenuHandler}
            onMouseOut={hideMenuHandler}
            windowMenu={windowMenu}
         >
            <InnerWindowMenu>
               <NavSectionItem sections={sections} />
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
