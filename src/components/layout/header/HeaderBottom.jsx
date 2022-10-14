import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { NAVIGATIONS_BOTTOM } from '../../../utils/constants/category'
import { StyledFlag } from './styles'
import Navigations from './Navigations'
import { scrollHeader } from '../../../utils/helpers/general'

const HeaderBottom = () => {
   const [isScroll, setIsScroll] = useState(false)
   window.addEventListener('scroll', () => {
      if (scrollHeader()) setIsScroll(true)
      else setIsScroll(false)
   })
   return (
      <HeaderStyled isScroll={isScroll}>
         {isScroll && (
            <Button onClick={() => setIsScroll(false)}>
               <AiOutlineMenuFold />
            </Button>
         )}
         {!isScroll && (
            <>
               <StyledFlag />
               <Navigations isBottom navigations={NAVIGATIONS_BOTTOM} />
               <StyledFlag />
            </>
         )}
      </HeaderStyled>
   )
}

const Button = styled.button`
   width: 100%;
   height: 100%;
   padding: 0.4em;
   background-color: transparent;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   font-size: 19px;
   cursor: pointer;
   border-radius: 10px;
   :hover {
      background-color: #0c2061;
   }
`

const HeaderStyled = styled.header`
   position: fixed;
   z-index: 3;
   bottom: ${({ isScroll }) => (isScroll ? '20px' : '0')};
   left: ${({ isScroll }) => (isScroll ? '20px' : '')};
   width: ${({ isScroll }) => (isScroll ? '60px' : '100%')};
   height: ${({ isScroll }) => (isScroll ? '50px' : '70px')};
   background-color: ${({ isScroll }) =>
      isScroll ? '#081646' : 'transparent'};
   border-radius: 10px;
   box-shadow: ${({ isScroll }) =>
      isScroll ? '6px 6px 10px rgba(0,0,0,0.4)' : 'none'};
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 800px) {
      display: none;
   }
`
export default HeaderBottom
