import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailNewsAndAnnouncementsWorld from './DetailNewsAndAnnouncementsWorld'
import TempleteInnerPage from '../../../components/temaplate-inner-pages'
import { localstorage } from '../../../utils/helpers/general'
import LoadingInnerPage from '../../../components/UI/loader/LoadingInnerPage'
import { getOneWorldNews } from '../../../store/news-slice'

const InnerPage = () => {
   const { oneNewsWorld, isLoading } = useSelector((state) => state.news)

   const { id } = useParams()

   const dispatch = useDispatch()

   const localData = localstorage.get('link')

   useEffect(() => {
      dispatch(
         getOneWorldNews({ id, offset: +localstorage.get('offset') || 1 })
      )
   }, [])

   const pathsArray = [
      {
         path: '/',
         name: 'Уй',
      },
      {
         path: localData?.path,
         name: localData?.title,
      },
      {
         path: '/jetekchilik/apparat',
         name: 'Дуйнолук',
      },
   ]
   return (
      <TempleteInnerPage pathsArray={pathsArray}>
         {isLoading && <LoadingInnerPage />}
         {!isLoading && (
            <DetailNewsAndAnnouncementsWorld oneData={oneNewsWorld} />
         )}
      </TempleteInnerPage>
   )
}

export default InnerPage
