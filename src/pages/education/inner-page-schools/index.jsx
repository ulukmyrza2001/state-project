import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailSchools from './DetailSchools'
import TempleteInnerPage from '../../../components/temaplate-inner-pages'
import { getOneData } from '../../../store/client-slice'
import { localstorage } from '../../../utils/helpers/general'

const InnerPage = () => {
   const { oneData, isLoading } = useSelector((state) => state.client)

   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getOneData({ category: 'educationSC', id }))
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
         name: `${oneData?.schoolName}`,
      },
   ]
   return (
      <TempleteInnerPage pathsArray={pathsArray}>
         {isLoading && <div>loading</div>}
         {!isLoading && <DetailSchools oneData={oneData} />}
      </TempleteInnerPage>
   )
}

export default InnerPage
