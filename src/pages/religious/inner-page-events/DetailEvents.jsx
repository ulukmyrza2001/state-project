import React from 'react'
import parse from 'html-react-parser'
import {
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'

const DetailEvents = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3 style={{ minWidth: '100%' }}>
                  Дин иш-чаралары жонундо маалымат
               </h3>
               <Text>{parse(String(oneData?.info))}</Text>
            </WrapperText>
         </WrapperLeftContent>
         <WrapperImage>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailEvents
