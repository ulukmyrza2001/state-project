import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import { useSearchParams } from 'react-router-dom'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import Card from '../../../components/UI/template-card'
import { getCountOfNews, getNewsWorld } from '../../../store/news-slice'
import { Flex } from '../../../styles/style-for-positions/style'
import Pagination from '../../../components/UI/pagination/Pagination'
import { localstorage } from '../../../utils/helpers/general'

const NewsAndAnnouncements = () => {
   const { newsWorld, isLoading, countOfWorld } = useSelector(
      (state) => state.news
   )
   const dispatch = useDispatch()
   const [params, setParams] = useSearchParams()
   const [pagination, setPagination] = useState(+params.get('page') || 1)

   const paginationHandler = (event, value) => setPagination(value)

   useEffect(() => {
      localstorage.save('offset', pagination)
      setParams({ page: pagination })
      dispatch(getNewsWorld(pagination))
      dispatch(getCountOfNews())
   }, [pagination])

   return (
      <>
         {(isLoading && <LoadingPage />) ||
            newsWorld.map((item) => (
               <Card
                  offset={pagination}
                  key={item.id}
                  title={item.title}
                  subTitle={parse(String(item.text))}
                  item={item}
               />
            ))}
         <Flex width="100%" justify="center">
            <Pagination
               onChange={paginationHandler}
               count={Math.ceil(+countOfWorld / 8)}
               page={pagination}
            />
         </Flex>
      </>
   )
}

export default NewsAndAnnouncements
