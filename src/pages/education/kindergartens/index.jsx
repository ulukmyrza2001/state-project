import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import Card from '../../../components/UI/template-card'
import { clientGetData } from '../../../store/client-slice'

const Kindergartens = () => {
   const { data, isLoading } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('educationKinder'))
   }, [])

   return (
      (isLoading && <LoadingPage />) ||
      data.map((item) => (
         <Card
            key={item.id}
            title={item.kindergartensName}
            subTitle={item.address}
            item={item}
         />
      ))
   )
}

export default Kindergartens
