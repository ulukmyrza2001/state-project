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

const DetailMosque = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3 style={{ minWidth: '100%' }}>Мечит жонундо маалымат</h3>
               <Text>{parse(String(oneData?.positions))}</Text>
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Мечиттин толук аталышы:</b> {oneData?.mosqueName}
               </p>
               <p>
                  <b>Мечиттин имамы:</b> {oneData?.imamName}
               </p>
               <p>
                  <b>Мечиттин курулган куну:</b> {oneData?.birthDay}
               </p>
               <p>
                  <b>Дареги:</b> {oneData?.address}
               </p>
               <p>
                  <b>Байланыш телефону:</b>{' '}
                  <A href={`tel:${oneData?.phone}`}>{oneData?.phone}</A>
               </p>
               <p>
                  <b>Электрондук почтасы:</b>{' '}
                  <A href={`mailto:${oneData?.email}`}>{oneData?.email}</A>
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailMosque
