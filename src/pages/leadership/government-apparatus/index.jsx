import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clientGetData } from '../../../store/client-slice'
import { Flex } from '../../../styles/style-for-positions/style'

const GovernmentApparatus = () => {
   const { governmentApparatus } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('leadership'))
   }, [])

   return governmentApparatus.map((item) => (
      <Flex
         key={item.id}
         width="100%"
         direction="column"
         gap="10px"
         mobileDirection="column"
         mobileGap="10px 0"
         margin="10px 0"
      >
         <Flex
            gap="20px"
            mobileDirection="column"
            mobileAlign="center"
            mobileGap="10px 0"
         >
            <WrapperImage>
               <img src={item.fileInformation.photo} alt="" />
            </WrapperImage>
            <Flex
               direction="column"
               gap="10px"
               justify="space-between"
               mobileDirection="column"
               mobileGap="10px 0"
            >
               <Flex
                  direction="column"
                  gap="10px"
                  mobileDirection="column"
                  mobileAlign="center"
                  justify="center"
               >
                  <h3>{item.positions}</h3>

                  <h4>
                     {item.firstName} {item.lastName} {item.patronymic}
                  </h4>
               </Flex>
            </Flex>
         </Flex>
      </Flex>
   ))
}
const WrapperImage = styled.div`
   img {
      width: 200px;
   }
`
export default GovernmentApparatus
