import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.png'
import backgroundImage from '../../assets/images/fundo.png'
import * as S from './styles'

export type Props = {
  estanahome: boolean
}

export const Header = ({ estanahome }: Props) => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      {estanahome ? (
        <S.Header
          estanahome={estanahome}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <S.LogoLink to="/">
            <S.Logo estanahome={estanahome} src={logo} alt="EFood" />
          </S.LogoLink>
          <S.DivtitleHeader>
            <S.titleHeader estanahome={estanahome}>
              Viva experiências gastronômicas no conforto da sua casa
            </S.titleHeader>
          </S.DivtitleHeader>
        </S.Header>
      ) : (
        <>
          <S.Header
            estanahome={estanahome}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <S.HeaderNavigation className="container">
              <ul>
                <li>
                  <S.titleHeader estanahome={estanahome}>
                    Restaurantes
                  </S.titleHeader>
                </li>
                <li>
                  <S.LogoLink to="/">
                    <S.Logo estanahome={estanahome} src={logo} alt="EFood" />
                  </S.LogoLink>
                </li>
                <li>
                  <S.titleHeader onClick={openCart} estanahome={estanahome}>
                    {items.length} produto(s) no carrinho
                  </S.titleHeader>
                </li>
              </ul>
            </S.HeaderNavigation>
          </S.Header>
        </>
      )}
    </>
  )
}
