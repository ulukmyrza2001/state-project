import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailNewsAndAnnouncementsState from './DetailNewsAndAnnouncementsState'
import TempleteInnerPage from '../../../components/temaplate-inner-pages'
import { localstorage } from '../../../utils/helpers/general'
import LoadingInnerPage from '../../../components/UI/loader/LoadingInnerPage'
import { getOneStateNews } from '../../../store/news-slice'

const InnerPage = () => {
   const { oneNewsState, isLoading } = useSelector((state) => state.news)

   const { id } = useParams()

   const dispatch = useDispatch()

   const localData = localstorage.get('link')

   useEffect(() => {
      dispatch(
         getOneStateNews({ id, offset: +localstorage.get('offset') || 1 })
      )
   }, [])

   const pathsArray = [
      {
         path: '/',
         name: 'Уй',
      },
      {
         path: localData?.path,
         name: 'Жанылыктар жана кулактандыруулар',
      },
      {
         path: '/jetekchilik/apparat',
         name: 'Мыйзамдар жана токтомдор',
      },
   ]
   return (
      <TempleteInnerPage pathsArray={pathsArray}>
         {isLoading && <LoadingInnerPage />}
         {!isLoading && (
            <DetailNewsAndAnnouncementsState oneData={oneNewsState} />
         )}
      </TempleteInnerPage>
   )
}

export default InnerPage
