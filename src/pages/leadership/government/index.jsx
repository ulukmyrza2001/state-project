import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { clientGetData } from '../../../store/client-slice'
import { Flex } from '../../../styles/style-for-positions/style'
import LoadingInnerPage from '../../../components/UI/loader/LoadingInnerPage'
import {
   A,
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'

const Government = () => {
   const { government, isLoading } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('leadership'))
   }, [])

   return (
      (isLoading && <LoadingInnerPage />) ||
      government.map((item) => (
         <Container key={item.id}>
            <WrapperLeftContent>
               <WrapperText width="100%" align="center" direction="column">
                  <h3>Кызматкер жонундо маалымат</h3>
                  <Text>{parse(String(item?.text))}</Text>
               </WrapperText>
               <div>
                  <p>
                     <b>Позициясы:</b> {item.positions} <br />
                  </p>
                  <p>
                     <b>Байланыш телефону:</b>{' '}
                     <A href={`tel:${item.phoneNumber}`}>{item.phoneNumber}</A>{' '}
                     <br />
                  </p>
                  <p>
                     <b>Электрондук почтасы:</b>{' '}
                     <A target="_blank" href={`mailto:${item.email}`}>
                        {item.email}
                     </A>
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
   )
}
// const Container = styled(Flex)`
//    gap: 20px;
//    @media (max-width: 800px) {
//       justify-content: center;
//       align-items: center;
//       flex-direction: column-reverse;
//       flex-wrap: wrap;
//    }
// `
// const Wrapper = styled(Flex)``
// const WrapperLeftContent = styled(Flex)`
//    flex-direction: column;
//    justify-content: space-between;
//    gap: 10px 0;
//    @media (max-width: 800px) {
//       gap: 20px;
//    }
// `
// const Text = styled.p`
//    @media (max-width: 800px) {
//       text-align: center;
//    }
// `
// const A = styled.a`
//    color: black;
// `

// const WrapperImage = styled.div`
//    img {
//       width: 250px;
//    }
// `

export default Government
