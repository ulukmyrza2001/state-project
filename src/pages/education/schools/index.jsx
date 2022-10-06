import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clientGetData } from '../../../store/client-slice'
import { Flex } from '../../../styles/style-for-positions/style'

const Schools = () => {
   const { data } = useSelector((state) => state.client)
   const dispatch = useDispatch()
   const textRef = useRef()

   useEffect(() => {
      dispatch(clientGetData('educationSC'))
   }, [])

   useEffect(() => {
      if (data.length > 0) textRef.current.innerHTML = data[0].text
   }, [data])

   return data.map((item) => (
      <Container key={item.id}>
         <WrapperLeftContent>
            <Flex width="100%" align="center" direction="column">
               <h3>Мектеп жонундо маалымат</h3>
               <Text ref={textRef} />
            </Flex>
            <div>
               <p>
                  <b>Мектептин аталышы:</b> {item.schoolName} <br />
               </p>
               <p>
                  <b>Байланыш телефону:</b>{' '}
                  <A href={`tel:${item.phoneNumber}`}>{item.phoneNumber}</A>{' '}
                  <br />
               </p>
            </div>
         </WrapperLeftContent>
         <WrapperImage>
            <img src={item.fileInformation.photo} alt="" />
            <h4>
               {item.firstName} {item.lastName} {item.patronymic}
            </h4>
         </WrapperImage>
      </Container>
   ))
}
const Container = styled(Flex)`
   gap: 20px;
   @media (max-width: 800px) {
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      flex-wrap: wrap;
   }
`
const Wrapper = styled(Flex)``
const WrapperLeftContent = styled(Flex)`
   flex-direction: column;
   justify-content: space-between;
   gap: 10px 0;
   @media (max-width: 800px) {
      gap: 20px;
   }
`
const Text = styled.p`
   @media (max-width: 800px) {
      text-align: center;
   }
`
const A = styled.a`
   color: black;
`

const WrapperImage = styled.div`
   img {
      width: 250px;
   }
`

export default Schools
