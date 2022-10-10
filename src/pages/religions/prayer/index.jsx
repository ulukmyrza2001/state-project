import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import Card from '../../../components/UI/template-card'
import { clientGetData } from '../../../store/client-slice'
import { getPrayerTime } from '../../../store/prayer-time-slice'

const Prayer = () => {
   const { isLoading } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getPrayerTime())
   }, [])

   return (
      <div>hello</div>
      //   (isLoading && <LoadingPage />) ||
      //   prayerTime.map((item) => (
      //      <Card
      //         key={item.id}
      //         title={item.schoolName}
      //         sdataubTitle={item.address}
      //         item={item}
      //      />
      //   ))
   )
}

export default Prayer
