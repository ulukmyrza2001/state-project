import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import Card from '../../../components/UI/template-card'
import { clientGetData } from '../../../store/client-slice'

const Oms = () => {
   const { data, isLoading } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('healthOMS'))
   }, [])

   return (
      (isLoading && <LoadingPage />) ||
      data.map((item) => (
         <Card
            key={item.id}
            title={item.title}
            subTitle={parse(String(item.info))}
            item={item}
         />
      ))
   )
}

export default Oms
