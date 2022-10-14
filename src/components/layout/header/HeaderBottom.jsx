import React, { useState } from 'react'
import styled from 'styled-components'
import { NAVIGATIONS_BOTTOM } from '../../../utils/constants/category'
import { StyledFlag } from './styles'
import Navigations from './Navigations'
import { scrollHeader } from '../../../utils/helpers/general'
import Button from '../../UI/buttons/Button'

const HeaderBottom = () => {
   const [isScroll, setIsScroll] = useState(false)
   window.addEventListener('scroll', () => {
      if (scrollHeader()) setIsScroll(true)
      else setIsScroll(false)
   })
   return (
      <>
         <Button />
         <HeaderStyled isScroll={isScroll}>
            <StyledFlag />
            <Navigations isBottom navigations={NAVIGATIONS_BOTTOM} />
            <StyledFlag />
         </HeaderStyled>
      </>
   )
}

const HeaderStyled = styled.header`
   position: fixed;
   z-index: 3;
   bottom: 0;
   width: 100%;
   height: ${({ isScroll }) => (isScroll ? '50px' : '70px')};
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 800px) {
      display: none;
   }
`
export default HeaderBottom
