import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TempleteInnerPage from '../../../components/temaplate-inner-pages'
import { clientGetData } from '../../../store/client-slice'

const InnerPage = () => {
   const [apparat, setApparat] = useState(null)
   const { governmentApparatus } = useSelector((state) => state.client)

   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('leadership'))
   }, [])
   useEffect(() => {
      setApparat(governmentApparatus.find((item) => +item.id === +id) || {})
   }, [governmentApparatus])

   const pathsArray = [
      {
         path: '/',
         name: 'Уй',
      },
      {
         path: '/jetekchilik/apparat',
         name: 'Айыл окмотунун аппараты',
      },
      {
         path: '/jetekchilik/apparat',
         name: `${apparat?.firstName} ${apparat?.lastName}`,
      },
   ]
   return <TempleteInnerPage pathsArray={pathsArray}>asdsa</TempleteInnerPage>
}

export default InnerPage
