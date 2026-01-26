import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { parseToBrl } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import close from '../../assets/images/fechar.png'
import * as S from './styles'
import Loader from '../Loader'

type Props = {
  restaurant: RestaurantClass
}

interface ModalState extends CardapioItem {
  isVisible: boolean
}

export const FoodSection = ({ restaurant }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    descricao: '',
    foto: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  })

  const openCart = () => {
    dispatch(open())
    dispatch(add(modal))
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 178) {
      return descricao.slice(0, 178) + '...'
    }
    return descricao
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      descricao: '',
      foto: '',
      id: modal.id,
      nome: '',
      porcao: '',
      preco: 0
    })
  }

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <S.RestaurantImage>
        <S.RestaurantImageDark
          style={{
            backgroundImage: `url(${restaurant.capa})`
          }}
        ></S.RestaurantImageDark>
        <S.RestaurantImageText className="container">
          <h3>{restaurant.tipo}</h3>
          <p>{restaurant.titulo}</p>
        </S.RestaurantImageText>
      </S.RestaurantImage>
      <S.FoodContainer className="container">
        {restaurant.cardapio.map((cardapio) => (
          <div key={cardapio.id}>
            <S.Card>
              <S.CardImg src={cardapio.foto} alt={`${cardapio.nome}`} />
              <S.CardText>
                <S.CardTitle>
                  <h3>{cardapio.nome}</h3>
                </S.CardTitle>
                <S.CardTextContent>
                  {getDescription(cardapio.descricao)}
                </S.CardTextContent>
                <S.Button
                  onClick={() =>
                    setModal({
                      isVisible: true,
                      descricao: cardapio.descricao,
                      foto: cardapio.foto,
                      id: cardapio.id,
                      nome: cardapio.nome,
                      porcao: cardapio.porcao,
                      preco: cardapio.preco
                    })
                  }
                >
                  Mais Detalhes
                </S.Button>
              </S.CardText>
            </S.Card>
          </div>
        ))}
        <S.Modal className={modal.isVisible ? 'visible' : ''}>
          <S.ModalContent>
            <S.IconeFechar
              src={close}
              onClick={closeModal}
              alt="icone de fechar"
            />
            <S.ImagemComida src={modal.foto} alt={modal.nome} />
            <div>
              <S.TextSeparator>
                <h4>{modal.nome}</h4>
                <p>{modal.descricao}</p>
              </S.TextSeparator>
              <p>{`Serve de ${modal.porcao}`}</p>
              <S.Button
                onClick={openCart}
              >{`Adicionar ao Carrinho - ${parseToBrl(modal.preco)}`}</S.Button>
            </div>
          </S.ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </S.Modal>
      </S.FoodContainer>
    </>
  )
}
