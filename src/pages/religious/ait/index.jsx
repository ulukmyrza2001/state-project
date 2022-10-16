import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import Card from '../../../components/UI/template-card'
import { clientGetData } from '../../../store/client-slice'

const Ait = () => {
   const { data, isLoading } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('religiousAit'))
   }, [])

   return (
      (isLoading && <LoadingPage />) ||
      data.map((item) => (
         <Card key={item.id} subTitle={parse(String(item.text))} item={item} />
      ))
   )
}

export default Ait
