import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slideshow from '../../../components/carousel'
import { getNewsState } from '../../../store/news-slice'

const News = () => {
   const dispatch = useDispatch()
   const { newsState, isLoading } = useSelector((state) => state.news)

   useEffect(() => {
      dispatch(getNewsState())
   }, [])

   return <Slideshow isLoading={isLoading} news={newsState} />
}

export default News
