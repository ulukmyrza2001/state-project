import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clientGetData } from '../../../store/client-slice'
import Card from '../../../components/UI/template-card'

const GovernmentApparatus = () => {
   const { governmentApparatus } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('leadership'))
   }, [])

   return governmentApparatus.map((item) => (
      <Card
         key={item.id}
         title={item.positions}
         subTitle={`${item.firstName} ${item.lastName} ${item.patronymic}`}
         item={item}
      />
   ))
}

export default GovernmentApparatus
