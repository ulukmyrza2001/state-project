import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import { useSearchParams } from 'react-router-dom'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import Card from '../../../components/UI/template-card'
import { getCountOfNews, getNewsState } from '../../../store/news-slice'
import { Flex } from '../../../styles/style-for-positions/style'
import Pagination from '../../../components/UI/pagination/Pagination'
import { localstorage } from '../../../utils/helpers/general'

const NewsAndAnnouncements = () => {
   const { newsState, isLoading, countOfState } = useSelector(
      (state) => state.news
   )
   const dispatch = useDispatch()
   const [params, setParams] = useSearchParams()
   const [pagination, setPagination] = useState(+params.get('page') || 1)

   const paginationHandler = (event, value) => setPagination(value)

   useEffect(() => {
      localstorage.save('offset', pagination)
      setParams({ page: pagination })
      dispatch(getNewsState(pagination))
      dispatch(getCountOfNews())
   }, [pagination])

   return (
      <>
         {(isLoading && <LoadingPage />) ||
            newsState.map((item) => (
               <Card
                  key={item.id}
                  title={item.title}
                  subTitle={parse(String(item.text))}
                  item={item}
               />
            ))}
         {countOfState < 1 && (
            <Flex width="100%" justify="center">
               <Pagination
                  onChange={paginationHandler}
                  count={Math.ceil(+countOfState / 8)}
                  page={pagination}
               />
            </Flex>
         )}
      </>
   )
}

export default NewsAndAnnouncements
