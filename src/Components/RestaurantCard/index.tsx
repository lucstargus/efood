import { Tag } from '../Tag'
import star from '../../assets/images/estrela.svg'
import * as S from './styles'
import Loader from '../Loader'

type Props = {
  image: string
  title: string
  description: string
  note: number
  infos: string
  id: number
  isLoading: boolean
}

export const RestaurantCard = ({
  image,
  title,
  description,
  note,
  infos,
  id,
  isLoading
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 272) {
      return descricao.slice(0, 275) + '...'
    }
    return descricao
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.Card>
        <S.CardImg style={{ backgroundImage: `url(${image})` }}>
          <S.CardLink to={`/restaurant/${id}`} />
        </S.CardImg>

        <S.RestaurantInfo>
          <Tag key={infos}>{infos}</Tag>
        </S.RestaurantInfo>

        <S.CardText>
          <S.CardTitle>
            <h3>{title}</h3>
            <span>
              <p>{note}</p> <img src={star} alt="" />
            </span>
          </S.CardTitle>
          <S.CardTextContent>{getDescricao(description)}</S.CardTextContent>
          <S.Button to={`/restaurant/${id}`}>Saiba mais</S.Button>
        </S.CardText>
      </S.Card>
    </>
  )
}
