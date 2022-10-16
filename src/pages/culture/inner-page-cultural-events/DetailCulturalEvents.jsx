import React from 'react'
import parse from 'html-react-parser'
import {
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'

const DetailCulturalEvents = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3>Иш-чара жонундо маалымат</h3>
               <Text>{parse(String(oneData?.text))}</Text>
            </WrapperText>
         </WrapperLeftContent>
         <WrapperImage>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailCulturalEvents
