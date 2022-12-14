/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/style-for-positions/style'

const LoadingPage = ({ height = '220px' }) => {
   return (
      <FlexCard width="100%">
         {Array.from({ length: 5 }).map((_, i) => (
            <Card height={height} key={i}>
               <P>
                  <H2 />
                  <WrapperText width="50%" direction="column" gap="20px">
                     <H3 />
                     <H3 width="60%" height="10px" />
                  </WrapperText>
                  <Bot />
               </P>
            </Card>
         ))}
      </FlexCard>
   )
}
const WrapperText = styled(Flex)`
   @media (max-width: 660px) {
      width: 80%;
   }
`
const FlexCard = styled(Flex)`
   gap: ${({ width }) => (width ? '13px' : '15px')};
   flex-wrap: wrap;
`

const Card = styled.div`
   width: 100%;
   min-height: ${(props) => props.height || '362px'};
   position: relative;
`

const H2 = styled.h2`
   :empty {
      width: 220px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      @media (max-width: 660px) {
         width: 100%;
      }
   }
`
const H3 = styled.h2`
   :empty {
      width: ${(props) => props.width || '100%'};
      height: ${(props) => props.height || '12px'};
      background-color: rgba(0, 0, 0, 0.2);
      @media (max-width: 660px) {
         width: 100%;
      }
   }
`
const Bot = styled.h2`
   :empty {
      width: 200px;
      height: ${(props) => props.height || '10px'};
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: rgba(0, 0, 0, 0.2);
      @media (max-width: 660px) {
         text-align: end;
         position: static;
         justify-self: end;
         margin: 10px;
      }
   }
`
const P = styled.p`
   position: relative;
   display: flex;
   align-items: center;
   gap: 20px;
   width: 100%;
   height: 100%;
   padding: 0.1rem;
   @media (max-width: 660px) {
      margin-bottom: 40px;
      flex-direction: column;
      padding-bottom: 20px;
      height: 350px;
   }
`

export default LoadingPage
