import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailLeadership from '../../../components/detail-leadership'
import TempleteInnerPage from '../../../components/temaplate-inner-pages'
import { getOneData } from '../../../store/client-slice'
import { localstorage } from '../../../utils/helpers/general'

const InnerPage = () => {
   const { oneData, isLoading } = useSelector((state) => state.client)
   const textRef = useRef()

   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getOneData({ category: 'leadership', id }))
   }, [])

   useLayoutEffect(() => {
      if (oneData) {
         textRef.current.innerHTML = oneData.text
      }
   }, [oneData])

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
         name: `${oneData?.firstName} ${oneData?.lastName}`,
      },
   ]
   return (
      <TempleteInnerPage pathsArray={pathsArray}>
         {isLoading && <div>loading</div>}
         {!isLoading && <DetailLeadership ref={textRef} oneData={oneData} />}
      </TempleteInnerPage>
   )
}

export default InnerPage
