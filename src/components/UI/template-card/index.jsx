import styled from 'styled-components'
import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Flex } from '../../../styles/style-for-positions/style'
import { localstorage } from '../../../utils/helpers/general'

const Card = ({ item, title, subTitle }) => {
   const { state } = useLocation()
   const localLink = useMemo(() => localstorage.get('link'), [])
   return (
      <Wrapper>
         <Container gap="20px">
            <WrapperImage>
               <img src={item?.fileInformation?.photo} alt="" />
            </WrapperImage>
            <Flex
               direction="column"
               gap="10px"
               justify="center"
               align="flex-start"
            >
               <WrapperTitle>
                  <h3>{title}</h3>
                  <h4>{subTitle}</h4>
               </WrapperTitle>
            </Flex>
            <LinkStyle
               onClick={() => localstorage.save('link', state || localLink)}
               to={`${item?.id}`}
            >
               Кененирээк маалымыт <IconRight />{' '}
            </LinkStyle>
         </Container>
      </Wrapper>
   )
}
const WrapperTitle = styled(Flex)`
   flex-direction: column;
   gap: 10px;
   justify-content: center;
   @media (max-width: 660px) {
      align-items: center;
   }
`
const Container = styled(Flex)`
   @media (max-width: 660px) {
      flex-direction: column;
      align-items: center;
   }
`
const IconRight = styled(AiOutlineArrowRight)``
const Wrapper = styled(Flex)`
   max-width: 1100px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 0 0 10px 0;
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
   text-decoration: none;
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
   display: flex;
   img {
      width: 200px;
      height: 220px;
      object-fit: cover;
   }
   @media (max-width: 660px) {
      width: 100%;
      img {
         width: 100%;
         object-position: center;
      }
   }
`

export default Card
