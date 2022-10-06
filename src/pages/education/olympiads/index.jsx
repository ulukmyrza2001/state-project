import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import Card from '../../../components/UI/template-card'
import { clientGetData } from '../../../store/client-slice'

const Olympiads = () => {
   const { data } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('educationOlympiads'))
   }, [])

   return data.map((item) => (
      <Card
         key={item.id}
         title={item.title}
         item={item}
         subTitle={parse(item.text)}
      />
   ))
}

export default Olympiads
