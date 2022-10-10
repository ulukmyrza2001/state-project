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

const DetailActiveYouth = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3>{oneData?.fullName} - жонундо маалымат</h3>
               <Text>{parse(String(oneData?.result))}</Text>
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Туулган датасы:</b> {oneData?.age}
               </p>
               <p>
                  <b>Тармагы:</b> {oneData?.direction}
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <h2>{oneData?.direction}</h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailActiveYouth
