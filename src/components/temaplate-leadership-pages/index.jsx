/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ImFacebook2 } from 'react-icons/im'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Flex } from '../../styles/style-for-positions/style'
import { Title } from '../../styles/typography/typography'

const SOCIAL_ICONS = [<ImFacebook2 />, <BsInstagram />, <BsWhatsapp />]

const socialsRender = (socials) => {
   return SOCIAL_ICONS.map((icon, i) => (
      <Social key={i} to={socials[i]}>
         {icon}
      </Social>
   ))
}

const TemplateLeaderShipPages = ({ headerTitle, children, socials }) => {
   return (
      <Container>
         <GlobalStyle />
         <Header>
            <InnerHeader>
               <Title>{headerTitle}</Title>
               <Flex gap="7px" align="center">
                  {socialsRender(socials)}
               </Flex>
            </InnerHeader>
         </Header>
         <Flex margin="12px 0" wdith="100%" justify="center">
            <ContainerContent>{children}</ContainerContent>
         </Flex>
      </Container>
   )
}
const Container = styled.div`
   padding-top: 60px;
   width: 100%;
   margin: 0 auto;
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
   max-width: 70%;
   background: #ffffff;
   padding: 1rem;
   box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.1);
`

export default TemplateLeaderShipPages
