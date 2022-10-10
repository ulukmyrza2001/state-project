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

const DetailOffersForYouth = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3>Сунуш жонундо маалымат</h3>
               <Text>{parse(String(oneData?.info))}</Text>
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Сунушттун аталышы:</b> {oneData?.offer}
               </p>
               <p>
                  <b>Сунуштоочунун аты-жонү:</b> {oneData?.title}
               </p>
               <p>
                  <b>Байланыш телефону:</b>{' '}
                  <A href={`tel:${oneData?.phone}`}>{oneData?.phone}</A>
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <h2>{oneData?.offer}</h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailOffersForYouth
