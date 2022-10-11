import React from 'react'
import styled from 'styled-components'
import { NAVIGATIONS_BOTTOM } from '../../../utils/constants/category'
import { StyledFlag } from './styles'
import Navigations from './Navigations'

const HeaderBottom = () => {
   return (
      <HeaderStyled>
         <StyledFlag />
         <Navigations isBottom navigations={NAVIGATIONS_BOTTOM} />
         <StyledFlag />
      </HeaderStyled>
   )
}

const HeaderStyled = styled.header`
   position: absolute;
   z-index: 3;
   bottom: 0;
   width: 100%;
   height: 70px;
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 800px) {
      display: none;
   }
`
export default HeaderBottom
