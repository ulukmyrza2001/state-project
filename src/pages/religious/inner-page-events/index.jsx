import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailEvents from './DetailEvents'
import TempleteInnerPage from '../../../components/temaplate-inner-pages'
import { getOneData } from '../../../store/client-slice'
import { localstorage } from '../../../utils/helpers/general'
import LoadingInnerPage from '../../../components/UI/loader/LoadingInnerPage'

const InnerPage = () => {
   const { oneData, isLoading } = useSelector((state) => state.client)

   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getOneData({ category: 'religiousActivities', id }))
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
         name: 'Иш-чаралар',
      },
   ]
   return (
      <TempleteInnerPage pathsArray={pathsArray}>
         {isLoading && <LoadingInnerPage />}
         {!isLoading && <DetailEvents oneData={oneData} />}
      </TempleteInnerPage>
   )
}

export default InnerPage
