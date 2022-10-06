import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Flex } from '../../../styles/style-for-positions/style'

const Card = ({ item, title, subTitle }) => {
   return (
      <Wrapper>
         <Flex gap="20px">
            <WrapperImage>
               <img src={item?.fileInformation?.photo} alt="" />
            </WrapperImage>
            <Flex
               direction="column"
               gap="10px"
               justify="center"
               align="flex-start"
            >
               <Flex direction="column" gap="10px" justify="center">
                  <h3>{title}</h3>

                  <h4>{subTitle}</h4>
               </Flex>
               <LinkStyle to={`${item?.id}`}>
                  Кененирээк маалымыт <IconRight />{' '}
               </LinkStyle>
            </Flex>
         </Flex>
      </Wrapper>
   )
}
const IconRight = styled(AiOutlineArrowRight)``
const Wrapper = styled(Flex)`
   width: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 0 0 10px 0;
   box-shadow: 0px 2px 0px 0px rgba(34, 60, 80, 0.2);
   p {
      font-size: 13px;
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
`

const WrapperImage = styled.div`
   display: flex;
   img {
      width: 200px;
      height: 220px;
      object-fit: cover;
   }
`

export default Card
