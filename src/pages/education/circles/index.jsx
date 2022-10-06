import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../components/UI/template-card'
import { clientGetData } from '../../../store/client-slice'

const Circles = () => {
   const { data } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('educationCircles'))
   }, [])

   return data.map((item) => (
      <Card
         key={item.id}
         title={item.courseName}
         subTitle={item.address}
         item={item}
      />
   ))
}

export default Circles
