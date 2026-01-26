import { useGetRestaurantQuery } from '../../services/api'

import { RestaurantCard } from '../RestaurantCard'
import { RestaurantContainer } from './styles'

type Props = {
  restaurant: RestaurantClass[]
}

export const RestaurantSection = ({ restaurant }: Props) => {
  const { isLoading } = useGetRestaurantQuery()
  return (
    <RestaurantContainer className="container">
      {restaurant.map((restaurant) => (
        <div key={restaurant.id}>
          <RestaurantCard
            description={restaurant.descricao}
            image={restaurant.capa}
            infos={restaurant.tipo}
            note={restaurant.avaliacao}
            title={restaurant.titulo}
            id={restaurant.id}
            isLoading={isLoading}
          />
        </div>
      ))}
    </RestaurantContainer>
  )
}
