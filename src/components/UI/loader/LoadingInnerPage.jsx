import React from 'react'
import styled from 'styled-components'
import { WrapperLeftContent, WrapperText } from '../../../styles/detail-styles'
import { Flex } from '../../../styles/style-for-positions/style'

const LoadingInnerPage = () => {
   return (
      <Container>
         <WrapperLeftContent width="100%">
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <H2 />
               <H3 />
               <H3 />
               <H3 />
               <H3 />
               <H3 />
               <H3 />
               <H3 />
            </WrapperText>
            <Flex
               direction="column"
               margin="20px 0 0 0"
               gap="20px"
               width="100%"
            >
               <H3 width="60%" />
               <H3 width="60%" />
               <H3 width="60%" />
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <P />
            <H3 />
         </WrapperImage>
      </Container>
   )
}

const Container = styled(Flex)`
   gap: 20px;
   @media (max-width: 800px) {
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      flex-wrap: wrap;
   }
`

const H2 = styled.h2`
   :empty {
      width: 320px;
      height: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      animation: skeleton-anim 1s 0.5s infinite alternate;
      @keyframes skeleton-anim {
         0% {
            opacity: 0.3;
         }
         100% {
            opacity: 0.8;
         }
      }
      @media (max-width: 660px) {
         width: 100%;
      }
   }
`
const H3 = styled.h2`
   :empty {
      width: ${(props) => props.width || '100%'};
      height: ${(props) => props.height || '10px'};
      background-color: rgba(0, 0, 0, 0.2);
      animation: skeleton-anim 1s 0.5s infinite alternate;
      @keyframes skeleton-anim {
         0% {
            opacity: 0.3;
         }
         100% {
            opacity: 0.8;
         }
      }
      @media (max-width: 660px) {
         width: 100%;
      }
   }
`
export const WrapperImage = styled.div`
   text-align: center;
   p {
      width: 500px;
      height: 450px;
      margin-top: 10px;
      @media (max-width: 900px) {
         width: 100%;
         height: 450px;
      }
   }
   @media (max-width: 900px) {
      width: 100%;
   }
`
const P = styled.p`
   width: 100%;
   height: 50%;
   background-color: rgba(0, 0, 0, 0.2);
   @media (max-width: 660px) {
      height: 350px;
   }
`

export default LoadingInnerPage
