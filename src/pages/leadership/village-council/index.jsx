import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../components/UI/template-card'
import { clientGetData } from '../../../store/client-slice'

const VillageCouncil = () => {
   const { villageCouncil } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('leadership'))
   }, [])

   return villageCouncil.map((item) => (
      <Card
         key={item.id}
         title={item.positions}
         subTitle={`${item.firstName} ${item.lastName} ${item.patronymic}`}
         item={item}
      />
   ))
}

export default VillageCouncil
