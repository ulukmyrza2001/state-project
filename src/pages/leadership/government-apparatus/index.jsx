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

   console.log(governmentApparatus)

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
         <h3>{item.positions}</h3>
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
               >
                  <h4>
                     {item.firstName} {item.lastName} {item.patronymic}
                  </h4>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Vel animi ea, ipsam natus perferendis fugiat minus. Amet
                     blanditiis deserunt, temporibus corrupti cum ipsum id, iure
                     animi velit corporis qui voluptatibus.Lorem ipsum dolor sit
                     amet consectetur, adipisicing elit. Vel animi ea, ipsam
                     natus perferendis fugiat minus. Amet blanditiis deserunt,
                     temporibus corrupti cum ipsum id, iure animi velit corporis
                     qui voluptatibus.Vel animi ea, ipsam natus perferendis
                     fugiat minus. Amet blanditiis deserunt, temporibus corrupti
                     cum ipsum id, iure animi velit corporis qui voluptatibus.
                  </p>
               </Flex>
               <Flex direction="column" mobileDirection="column">
                  <p>
                     <b>Байланыш телефону:</b> {item.phoneNumber} <br />
                  </p>
                  <p>
                     <b>Электрондук почтасы:</b> {item.email}
                  </p>
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
