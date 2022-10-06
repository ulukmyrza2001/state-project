/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import styled, { createGlobalStyle } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Flex } from '../../styles/style-for-positions/style'
import BreadCrumbs from '../UI/breadcrumbs/BreadCrumbs'

const SOCIAL_ICONS = [<ImFacebook2 />, <BsInstagram />, <BsWhatsapp />]

const socialsRender = (socials) => {
   return SOCIAL_ICONS.map((icon, i) => (
      <Social key={i} to={socials[i]}>
         {icon}
      </Social>
   ))
}

const TempleteInnerPage = ({
   socials = ['sdf', 'df', 'df'],
   children,
   pathsArray,
}) => {
   const { pathname, state } = useLocation()

   return (
      <Container>
         <GlobalStyle />
         <Header>
            <InnerHeader>
               <HeaderLeft>
                  <BreadCrumbs pathsArray={pathsArray} />
               </HeaderLeft>
               <Flex gap="7px" align="center">
                  {socialsRender(socials)}
               </Flex>
            </InnerHeader>
         </Header>
         <ContainerContent>{children}</ContainerContent>
      </Container>
   )
}
const GlobalStyle = createGlobalStyle`
    body{
        background: #f1f1f1;
    }
`
const Header = styled.div`
   width: 100%;
   padding: 0.7rem 1rem;
   background-color: #ffffff;
`
const Container = styled.div`
   padding-top: 60px;
   width: 100%;
   margin: 0 auto;
`
const InnerHeader = styled.div`
   max-width: 1140px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 10px;
   }
`
const HeaderLeft = styled(Flex)`
   width: 100%;
   flex-direction: column;
   @media (max-width: 800px) {
      align-items: center;
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
   width: 90%;
   margin: 0 auto;
   margin-top: 1rem;
   background: #ffffff;
   padding: 1rem;
   box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.1);
   @media (max-width: 800px) {
      min-width: 100%;
      max-width: 100%;
   }
`
export default TempleteInnerPage
