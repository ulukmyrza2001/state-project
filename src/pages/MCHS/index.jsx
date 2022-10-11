import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../components/UI/loader/LoadingPage'
import Card from '../../components/UI/template-card'
import { clientGetData } from '../../store/client-slice'

const MCHS = () => {
   const { data, isLoading } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('OKM'))
   }, [])

   return (
      (isLoading && <LoadingPage />) ||
      data.map((item) => (
         <Card
            key={item.id}
            title={item.fullName}
            subTitle={item.birthDay}
            item={item}
         />
      ))
   )
}

export default MCHS
