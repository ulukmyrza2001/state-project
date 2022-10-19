import React, { useEffect, useCallback, useRef } from 'react'
import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { findOneCategory, localstorage } from '../../utils/helpers/general'

const SideBarNav = () => {
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const refd = useRef()

   const oneCategoryForNavigations = findOneCategory(pathname)

   const navigateToCategory = (item) => {
      localstorage.save('link', item)
      navigate(item.path)
   }
   const scrollHandler = useCallback(() => {
      refd.current.style.marginTop = `${window.scrollY * 1.05}px`
   }, [window.scrollY])

   useEffect(() => {
      window.addEventListener('scroll', scrollHandler)
      return () => window.removeEventListener('scroll', scrollHandler)
   }, [scrollHandler])

   return (
      <NavigationBlock ref={refd}>
         <NavigationTitle>{oneCategoryForNavigations?.title}</NavigationTitle>
         <SiderBarStyled>
            {oneCategoryForNavigations?.innerList.map((item) => (
               <Li
                  isActive={pathname === item.path}
                  onClick={() => navigateToCategory(item)}
                  key={item.id}
               >
                  {item.title}
                  <div>
                     <IoIosArrowForward />
                  </div>
               </Li>
            ))}
         </SiderBarStyled>
      </NavigationBlock>
   )
}
const SiderBarStyled = styled.ul`
   list-style: none;
`
const Li = styled.li`
   padding: 15px 20px;
   border-bottom: 0 solid #f1f1f1;
   border-top: 0.1px solid #f1f1f1;
   cursor: pointer;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   opacity: ${({ isActive }) => (isActive ? '0.5' : '1')};
   pointer-events: ${({ isActive }) => (isActive ? 'none' : '')};
   :last-child {
      border-radius: 0 0 8px 8px;
   }
   div {
      display: flex;
      transition: 0.5s;
   }
   :hover {
      background-color: #dddddd;
   }
   :hover div {
      transform: translateX(3px);
   }
`
const NavigationTitle = styled.div`
   padding: 15px 20px;
   background-color: #dddd;
   border-radius: 8px 8px 0 0;
   font-weight: 400;
   font-style: normal;
   font-size: 14px;
`
const NavigationBlock = styled.div`
   width: 20%;
   min-width: 240px;
   border-radius: 10px;
   background-color: #ffffff;
   margin-right: 15px;
   @media (max-width: 800px) {
      display: none;
   }
`

export default SideBarNav
