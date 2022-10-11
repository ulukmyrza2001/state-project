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

const DetailTazalyk = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="100%"
               align="center"
               direction="column"
            >
               <h2>Тазалык кызматкери жонундо маалымат</h2>
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Тазалык жумушчусунун аты-жону:</b> {oneData?.fullName}
               </p>
               <p>
                  <b>Туулган куну:</b> {oneData?.birthday}
               </p>
               <p>
                  <b>Байланыш телефону:</b>{' '}
                  <A href={`tel:${oneData?.phoneNumber}`}>
                     {oneData?.phoneNumber}
                  </A>
               </p>
               <p>
                  <b>Электрондук почтасы:</b>{' '}
                  <A href={`tel:${oneData?.email}`}>{oneData?.email}</A>
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailTazalyk
