import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../components/UI/template-card'
import { clientGetData } from '../../../store/client-slice'

const Schools = () => {
   const { data } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('educationSC'))
   }, [])

   return data.map((item) => (
      <Card
         key={item.id}
         title={item.schoolName}
         subTitle={item.address}
         item={item}
      />
   ))
}

export default Schools
