import React from 'react'
import parse from 'html-react-parser'
import {
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'
import { Flex } from '../../../styles/style-for-positions/style'

const DetailGRT = ({ oneData }) => {
   return (
      <Container key={oneData?.id}>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3>ОРТ жонундо маалымат</h3>
               <Flex
                  direction="column"
                  margin="20px 0"
                  gap="6px"
                  align="flex-start"
                  width="100%"
               >
                  <p>
                     <b>ОРТ аталышы:</b> {oneData?.title}
                  </p>
               </Flex>
               <Text>{parse(String(oneData?.text))}</Text>
            </WrapperText>
         </WrapperLeftContent>
         {oneData?.fileInformation?.photo && (
            <WrapperImage>
               <img src={oneData?.fileInformation?.photo} alt="" />
            </WrapperImage>
         )}
      </Container>
   )
}

export default DetailGRT
