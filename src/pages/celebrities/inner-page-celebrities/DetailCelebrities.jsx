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

const DetailCelebrities = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3>Атактуу жонундо</h3>
               <Text>{parse(String(oneData?.text))}</Text>
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Аты-жону:</b> {oneData?.fullName}
               </p>
               <p>
                  <b>Туулган куну:</b> {oneData?.birthDay}
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailCelebrities
