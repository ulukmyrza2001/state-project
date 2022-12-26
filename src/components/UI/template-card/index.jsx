import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Flex } from '../../../styles/style-for-positions/style'

const Card = ({ item, title, subTitle }) => {
   return (
      <Wrapper>
         <Container gap="20px">
            {item?.fileInformation?.photo && (
               <WrapperImage>
                  <img src={item?.fileInformation?.photo} alt="" />
               </WrapperImage>
            )}
            <Flex
               direction="column"
               gap="10px"
               justify="center"
               align="flex-start"
               width="100%"
            >
               <WrapperTitle>
                  <h3 style={{ color: '#4d4e58' }}>{title}</h3>
                  <SubTitle>{subTitle}</SubTitle>
               </WrapperTitle>
            </Flex>
            <LinkStyle to={`${item?.id}`}>
               Толук маалымат алуу <IconRight />{' '}
            </LinkStyle>
         </Container>
      </Wrapper>
   )
}
const SubTitle = styled.h4`
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   color: #484c67;
   ul,
   ol {
      margin-left: 25px;
   }
`
const WrapperTitle = styled(Flex)`
   flex-direction: column;
   max-width: 70%;
   gap: 10px;
   justify-content: center;
   overflow: hidden;
   @media (max-width: 660px) {
      align-items: center;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
   }
`
const Container = styled(Flex)`
   min-width: 100%;
   @media (max-width: 660px) {
      flex-direction: column;
      align-items: center;
      max-width: 100%;
   }
`
const IconRight = styled(AiOutlineArrowRight)``
const Wrapper = styled(Flex)`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-bottom: 10px;
   box-shadow: 0px 2px 0px 0px rgba(34, 60, 80, 0.2);
   p {
      font-size: 13px;
   }
   @media (max-width: 660px) {
      margin-bottom: 40px;
   }
`
const LinkStyle = styled(Link)`
   position: absolute;
   bottom: 10px;
   right: 10px;
   display: flex;
   align-items: center;
   gap: 5px;
   color: black;
   :hover ${IconRight} {
      transform: translateX(5px);
   }
   @media (max-width: 660px) {
      width: 100%;
      position: static;
      justify-content: end;
      margin: 10px;
   }
`

const WrapperImage = styled.div`
   img {
      width: 220px;
      height: 220px;
      object-fit: cover;
   }
   @media (max-width: 660px) {
      min-width: 100%;
      img {
         width: 100%;
         object-position: center;
      }
   }
`

export default Card
