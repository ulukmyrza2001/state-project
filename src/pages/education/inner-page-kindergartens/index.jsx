import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TempleteInnerPage from '../../../components/temaplate-inner-pages'
import { getOneData } from '../../../store/client-slice'
import { localstorage } from '../../../utils/helpers/general'
import DetailKindergartens from './DetailKindergartens'

const InnerPage = () => {
   const { oneData, isLoading } = useSelector((state) => state.client)

   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getOneData({ category: 'educationKinder', id }))
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
         name: `${oneData?.kindergartensName}`,
      },
   ]
   return (
      <TempleteInnerPage pathsArray={pathsArray}>
         {isLoading && <div>loading</div>}
         {!isLoading && <DetailKindergartens oneData={oneData} />}
      </TempleteInnerPage>
   )
}

export default InnerPage
