/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ImFacebook2 } from 'react-icons/im'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Flex } from '../../styles/style-for-positions/style'
import { Title } from '../../styles/typography/typography'
import BreadCrumbs from '../UI/breadcrumbs/BreadCrumbs'
import SideBarNav from './SideBarNav'
import { findOneCategory } from '../../utils/helpers/general'

const SOCIAL_ICONS = [<ImFacebook2 />, <BsInstagram />, <BsWhatsapp />]

const socialsRender = (socials) => {
   return SOCIAL_ICONS.map((icon, i) => (
      <Social key={i} to={socials[i]}>
         {icon}
      </Social>
   ))
}

const TemplateLeaderShipPages = ({ socials = ['sdf', 'df', 'df'] }) => {
   const { pathname, state } = useLocation()

   const pathsArray = [
      {
         path: '/',
         name: 'Уй',
      },
      {
         path: '/jetekchilik/aiyldyk-kenesh',
         name: state.title,
      },
   ]
   return (
      <Container>
         <GlobalStyle />
         <Header>
            <InnerHeader>
               <Flex
                  direction="column"
                  width="100%"
                  mobileDirection="column"
                  mobileAlign="center"
               >
                  <TitleHeader>{`Мады айыл өкмөтү / ${
                     findOneCategory(pathname).title
                  }`}</TitleHeader>
                  <BreadCrumbs pathsArray={pathsArray} />
               </Flex>
               <Flex gap="7px" align="center">
                  {socialsRender(socials)}
               </Flex>
            </InnerHeader>
         </Header>
         <Flex
            margin="12px 0"
            width="100%"
            justify="center"
            mobileJustify="center"
         >
            <WrapperContent>
               <NavigationBlock>
                  <NavigationTitle>Навигация</NavigationTitle>
                  <InnerNavigationLi>
                     <SideBarNav />
                  </InnerNavigationLi>
               </NavigationBlock>
               <ContainerContent>
                  <Outlet />
               </ContainerContent>
            </WrapperContent>
         </Flex>
      </Container>
   )
}
const WrapperContent = styled(Flex)`
   max-width: 1380px;
   justify-content: space-between;
   align-items: flex-start;
   @media (max-width: 800px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
   }
`

const TitleHeader = styled(Title)`
   font-weight: bold;
   @media (max-width: 800px) {
      font-size: 15px;
   }
   @media (max-width: 500px) {
      font-size: 13px;
      margin: 5px 0;
   }
`
const Container = styled.div`
   padding-top: 60px;
   width: 100%;
   margin: 0 auto;
   @media (max-width: 800px) {
      width: 100%;
   }
`
const Header = styled.div`
   width: 100%;
   padding: 0.7rem 1rem;
   background-color: #ffffff;
`
const InnerHeader = styled.div`
   max-width: 1140px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 10px;
   }
`
const GlobalStyle = createGlobalStyle`
    body{
        background: #f1f1f1;
    }
`
const Social = styled(Link)`
   padding: 0.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #212529;
   border: 1px solid #c2ccd8;
   border-radius: 5px;
   font-size: 15px;
   :hover {
      color: #536577;
   }
`
const ContainerContent = styled.div`
   width: 88%;
   background: #ffffff;
   padding: 1rem;
   box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.1);
   @media (max-width: 800px) {
      width: 100%;
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
   width: 10%;
   min-width: 240px;
   border-radius: 10px;
   background-color: #ffffff;
   margin-right: 15px;
   @media (max-width: 800px) {
      display: none;
   }
`
const InnerNavigationLi = styled.ul`
   list-style: none;
   li {
      padding: 15px 20px;
      border-bottom: 0 solid #f1f1f1;
      border-top: 0.1px solid #f1f1f1;
      cursor: pointer;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
   }
`
export default TemplateLeaderShipPages
