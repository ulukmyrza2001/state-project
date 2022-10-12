import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slideshow from '../../components/carousel'
import { clientGetData } from '../../store/client-slice'

const News = () => {
   const dispatch = useDispatch()
   const { data } = useSelector((state) => state.client)

   useEffect(() => {
      dispatch(clientGetData('news'))
   }, [])

   return <Slideshow news={data} />
}

export default News
