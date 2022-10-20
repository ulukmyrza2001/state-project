/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/style-for-positions/style'

const LoaderState = ({ height = '600px' }) => {
   return (
      <FlexCard width="100%">
         <Card height={height}>
            <P>
               <WrapperText width="100%" direction="column" gap="20px">
                  <H3 width="50%" height="30px" />
                  <H3 width="30%" height="10px" />
               </WrapperText>
            </P>
         </Card>
      </FlexCard>
   )
}
const WrapperText = styled(Flex)`
   @media (max-width: 660px) {
      width: 80%;
   }
`
const FlexCard = styled(Flex)`
   max-width: 1200px;
   margin: 0 auto;
   gap: ${({ width }) => (width ? '13px' : '15px')};
   flex-wrap: wrap;
`

const Card = styled.div`
   width: 100%;
   min-height: ${(props) => props.height || '362px'};
   position: relative;
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

const P = styled.p`
   position: relative;
   display: flex;
   padding: 1rem;
   align-items: flex-end;
   justify-content: flex-start;
   background-color: #c2c2c2;
   gap: 20px;
   width: 100%;
   height: 100%;
   border-radius: 6px;
   @media (max-width: 660px) {
      margin-bottom: 40px;
      flex-direction: column;
      padding-bottom: 20px;
      height: 350px;
   }
`

export default LoaderState
