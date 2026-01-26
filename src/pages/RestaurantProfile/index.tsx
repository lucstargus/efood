import { useParams } from 'react-router-dom'

import { Header } from '../../Components/Header'

import { FoodSection } from '../../Components/FoodSection'
import { useGetRestaurantFoodsQuery } from '../../services/api'

import Loader from '../../Components/Loader'

type foodParams = {
  id: string
}

export const RestaurantProfile = () => {
  const { id } = useParams() as foodParams
  const { data: foodSection } = useGetRestaurantFoodsQuery(id)

  if (!foodSection) {
    return <Loader />
  }

  return (
    <>
      <Header estanahome={false} />
      <FoodSection restaurant={foodSection} />
    </>
  )
}
