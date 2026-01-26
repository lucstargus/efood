import { Header } from '../../Components/Header'
import Loader from '../../Components/Loader'
import { RestaurantSection } from '../../Components/RestaurantSection'
import { useGetRestaurantQuery } from '../../services/api'

export const Home = () => {
  const { data: restaurants } = useGetRestaurantQuery()

  if (!restaurants) {
    return <Loader />
  }

  return (
    <>
      <Header estanahome={true} />
      <RestaurantSection restaurant={restaurants} />
    </>
  )
}
