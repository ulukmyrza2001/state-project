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

const DetailSportActivities = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3>Спроттук иш-чара жонундо маалымат</h3>
               <Text>{parse(String(oneData?.info))}</Text>
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Спорттук иш-чаранын аталышы:</b> {oneData?.sportEventsName}
               </p>
               <p>
                  <b>Спорттук иш-чаранын убакыты: </b>
                  {oneData?.time}
               </p>
               <p>
                  <b>Дареги:</b> {oneData?.address}
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <h2>{oneData?.sportEventsName}</h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailSportActivities
