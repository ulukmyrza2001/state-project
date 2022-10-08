import React, { useState } from 'react'
import styled from 'styled-components'
import { NAVIGATIONS_BOTTOM } from '../../../utils/constants/category'
import { StyledFlag } from './styles'
import Navigations from './Navigations'

const HeaderBottom = () => {
   const [windowMenu, setWindowMenu] = useState(false)
   const [sections, setSections] = useState({ innerList: [] })

   return (
      <HeaderStyled windowMenu={windowMenu}>
         <StyledFlag />
         <Navigations
            sections={sections}
            windowMenu={windowMenu}
            setWindowMenu={setWindowMenu}
            headerBackground={windowMenu}
            isBottom
            navigations={NAVIGATIONS_BOTTOM}
            onMouseOut={() => setWindowMenu(false)}
            onMouseMove={(e) => {
               setWindowMenu(e.currentTarget.id)
               setSections(
                  NAVIGATIONS_BOTTOM.find((el) => el.id === e.currentTarget.id)
               )
            }}
         />
         <StyledFlag />
      </HeaderStyled>
   )
}

const HeaderStyled = styled.header`
   position: absolute;
   z-index: 10;
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
