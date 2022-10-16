import React from 'react'
import {
   A,
   Container,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'
import { Flex } from '../../../styles/style-for-positions/style'
import { Text } from '../../../styles/typography/typography'

const DetailMCHS = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h2>ОКМ кызматкери жонундо маалымат</h2>
               <Flex direction="column" margin="20px 0 0 0" gap="6px">
                  <Text size="20px">
                     <b>Аты жону:</b> {oneData?.fullName}
                  </Text>
                  <Text size="20px">
                     <b>Туулган куну:</b> {oneData?.birthDay}
                  </Text>
                  <Text size="20px">
                     <b>Байланыш телефону:</b>{' '}
                     <A href={`tel:${oneData?.phone}`}>{oneData?.phone}</A>
                  </Text>
                  <Text size="20px">
                     <b>Электрондук почтасы:</b>{' '}
                     <A href={`mailto:${oneData?.email}`}>{oneData?.email}</A>
                  </Text>
               </Flex>
            </WrapperText>
         </WrapperLeftContent>
         <WrapperImage>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailMCHS
