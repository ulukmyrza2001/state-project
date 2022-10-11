import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneData } from '../../../store/client-slice'
import { localstorage } from '../../../utils/helpers/general'
import TempleteInnerPage from '../../../components/temaplate-inner-pages'
import LoadingInnerPage from '../../../components/UI/loader/LoadingInnerPage'
import DetailInnerAnimalUsb from './DetailInnerAnimalUsb'

const InnerAnimalUsb = () => {
   const { oneData, isLoading } = useSelector((state) => state.client)

   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getOneData({ category: 'agroAnimalUsbundry', id }))
   }, [])

   const pathsArray = [
      {
         path: '/',
         name: 'Уй',
      },
      {
         path: localstorage.get('link').path,
         name: localstorage.get('link').title,
      },
      {
         path: '/jetekchilik/apparat',
         name: `${oneData?.title}`,
      },
   ]
   return (
      <TempleteInnerPage pathsArray={pathsArray}>
         {isLoading && <LoadingInnerPage />}
         {!isLoading && <DetailInnerAnimalUsb oneData={oneData} />}
      </TempleteInnerPage>
   )
}

export default InnerAnimalUsb
