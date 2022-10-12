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

const DetailInnerHeaderOfCommittee = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3>Жаштар комитет жонундо маалымат</h3>
               <Text>{parse(String(oneData?.info))}</Text>
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Комитеттин аталышы:</b> {oneData?.managerName}
               </p>
               <p>
                  <b>Комитеттин директору:</b> {oneData?.managerDirectorName}
               </p>
               <p>
                  <b>Дареги:</b> {oneData?.address}
               </p>
               <p>
                  <b>Байланыш телефону:</b>{' '}
                  <A href={`tel:${oneData?.phone}`}>{oneData?.phone}</A>
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <h2>{oneData?.managerDirectorName}</h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailInnerHeaderOfCommittee
