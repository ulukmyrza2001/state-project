import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import LoadingPage from '../../components/UI/loader/LoadingPage'
import Card from '../../components/UI/template-card'
import { clientGetData } from '../../store/client-slice'

const NewsAndAnnouncements = () => {
   const { data, isLoading } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('news'))
   }, [])

   return (
      (isLoading && <LoadingPage />) ||
      data.map((item) => (
         <Card
            key={item.id}
            title={item.title}
            subTitle={parse(String(item.text))}
            item={item}
         />
      ))
   )
}

export default NewsAndAnnouncements
