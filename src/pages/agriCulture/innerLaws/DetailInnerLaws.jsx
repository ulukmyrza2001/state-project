import React from 'react'
import parse from 'html-react-parser'
import {
   A,
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'
import { Flex } from '../../../styles/style-for-positions/style'

const DetailInnerLaws = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText gap="20px" width="90%" align="center">
               <h3>Айыл-чарба мыйзамы</h3>
            </WrapperText>
            <h5>{parse(String(oneData?.text))}</h5>
         </WrapperLeftContent>
      </Container>
   )
}

export default DetailInnerLaws
