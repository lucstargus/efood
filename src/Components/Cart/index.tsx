import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import InputMask from 'react-input-mask'

import {
  stateCartCard,
  close,
  remove,
  stateCartAdress,
  stateCartItems,
  stateCartOrder
} from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'
import Loader from '../Loader'

export const Cart = () => {
  const { items, isOpen, inAdress, inCart, inCard, inOrder } = useSelector(
    (state: RootReducer) => state.cart
  )

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      ReceiverName: '',
      ReceiverAdress: '',
      ReceiverCity: '',
      ReceiverCEP: '',
      ReceiverAdressNumber: '',
      ReceiverAdressComplement: '',
      CardOwner: '',
      CardNumber: '',
      CVVCard: '',
      ExpiresMonth: '',
      ExpiresYear: ''
    },
    validationSchema: Yup.object({
      ReceiverName: Yup.string()
        .min(5, 'O Nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      ReceiverAdress: Yup.string().required('O campo é obrigatório'),
      ReceiverCity: Yup.string().required('O campo é obrigatório'),
      ReceiverCEP: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .max(9, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      ReceiverAdressNumber: Yup.string().required('O campo é obrigatório'),
      ReceiverAdressComplement: Yup.string(),
      CardOwner: Yup.string()
        .min(5, 'O Nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      CardNumber: Yup.string().required('O campo é obrigatório'),
      CVVCard: Yup.string()
        .min(3, 'O CVV precisa ter 3 caracteres')
        .max(3, 'O CVV precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      ExpiresMonth: Yup.string().required('O campo é obrigatório'),
      ExpiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        delivery: {
          receiver: values.ReceiverName,
          address: {
            complement: values.ReceiverAdressComplement,
            city: values.ReceiverCity,
            description: values.ReceiverAdress,
            number: Number(values.ReceiverAdressNumber),
            zipCode: values.ReceiverCEP
          }
        },
        payment: {
          card: {
            name: values.CardOwner,
            number: values.CardNumber,
            code: Number(values.CVVCard),
            expires: {
              month: Number(values.ExpiresMonth),
              year: Number(values.ExpiresYear)
            }
          }
        }
      })
    }
  })

  const dispatch = useDispatch()

  const closeCartTab = () => {
    dispatch(close())
  }

  const removeCart = (id: number) => {
    dispatch(remove(id))
  }

  const cartTabSet = (tab: ActionCreatorWithPayload<boolean>) => {
    return dispatch(tab(true))
  }

  const validCartTabSet = (tab: ActionCreatorWithPayload<boolean>) => {
    const isValid = Object.keys(form.errors).length
    const isTouched = Object.keys(form.touched).length
    if (inAdress && isValid >= 5 && isTouched >= 1) {
      return dispatch(tab(true))
    }
    if (inCard && isValid === 0 && isTouched >= 1) {
      return dispatch(tab(true))
    }
    return alert('Insira seus dados')
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      if (currentItem.preco) {
        return (accumulator += currentItem.preco)
      }
      return 0
    }, 0)
  }

  if (items.length === 0) {
    return (
      <S.CartContainer className={isOpen ? 'visible' : ''}>
        <S.Overlay onClick={closeCartTab} />
        <S.SideBar>
          <S.EmptyCart>
            <h4>O Carrinho está vazio</h4>
            <p>Por favor adicione um item</p>
          </S.EmptyCart>
        </S.SideBar>
      </S.CartContainer>
    )
  }

  return (
    <S.CartContainer className={isOpen ? 'visible' : ''}>
      <S.Overlay onClick={closeCartTab} />
      <S.SideBar>
        <S.CartItems className={inCart ? 'visible' : ''}>
          <div>
            {items.map((cardapio) => (
              <S.CardItem key={cardapio.id}>
                <S.ProductImage src={cardapio.foto} />
                <div>
                  <h3>{cardapio.nome}</h3>
                  <p>{parseToBrl(cardapio.preco)}</p>
                </div>
                <button onClick={() => removeCart(cardapio.id)} />
              </S.CardItem>
            ))}
            <S.Price>
              Valor Total: <span>{parseToBrl(getTotalPrice())}</span>
            </S.Price>
            <S.BuyButton onClick={() => cartTabSet(stateCartAdress)}>
              Continuar com a entrega
            </S.BuyButton>
          </div>
        </S.CartItems>
        <S.CartAdress className={inAdress ? 'visible' : ''}>
          <h3>Entrega</h3>
          <form id="adressForm" onSubmit={form.handleSubmit}>
            <S.InputGroup>
              <label htmlFor="ReceiverName">Quem irá receber</label>
              <input
                type="text"
                id="ReceiverName"
                name="ReceiverName"
                value={form.values.ReceiverName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('ReceiverName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="ReceiverAdress">Endereço</label>
              <input
                type="text"
                id="ReceiverAdress"
                name="ReceiverAdress"
                value={form.values.ReceiverAdress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('ReceiverAdress') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="ReceiverCity">Cidade</label>
              <input
                type="text"
                id="ReceiverCity"
                name="ReceiverCity"
                value={form.values.ReceiverCity}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('ReceiverCity') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="ReceiverCEP">CEP</label>
                <InputMask
                  type="text"
                  id="ReceiverCEP"
                  name="ReceiverCEP"
                  value={form.values.ReceiverCEP}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('ReceiverCEP') ? 'error' : ''}
                  mask="99999-999"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="ReceiverAdressNumber">Número</label>
                <input
                  type="text"
                  id="ReceiverAdressNumber"
                  name="ReceiverAdressNumber"
                  value={form.values.ReceiverAdressNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('ReceiverAdressNumber') ? 'error' : ''
                  }
                />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label htmlFor="ReceiverAdressComplement">
                Complemento (opcional)
              </label>
              <input
                type="text"
                id="ReceiverAdressComplement"
                name="ReceiverAdressComplement"
                value={form.values.ReceiverAdressComplement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
          </form>
          <S.BuyButton
            form="adressForm"
            type="button"
            onClick={() => validCartTabSet(stateCartCard)}
          >
            Continuar com pagamento
          </S.BuyButton>
          <S.BuyButton onClick={() => cartTabSet(stateCartItems)}>
            Voltar para o carrinho
          </S.BuyButton>
        </S.CartAdress>
        <S.CartCard className={inCard ? 'visible' : ''}>
          <h3> Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}</h3>
          <form onSubmit={form.handleSubmit} id="adressForm">
            <S.InputGroup>
              <label htmlFor="CardOwner">Nome no Cartão</label>
              <input
                type="text"
                id="CardOwner"
                name="CardOwner"
                value={form.values.CardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('CardOwner') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.CVVCard>
              <S.InputGroup>
                <label htmlFor="CardNumber">Número do Cartão</label>
                <InputMask
                  type="text"
                  id="CardNumber"
                  name="CardNumber"
                  value={form.values.CardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('CardNumber') ? 'error' : ''}
                  mask="9999 9999 9999 9999"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="CVVCard">CVV</label>
                <InputMask
                  type="text"
                  id="CVVCard"
                  name="CVVCard"
                  value={form.values.CVVCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('CVVCard') ? 'error' : ''}
                  mask="999"
                />
              </S.InputGroup>
            </S.CVVCard>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="ExpiresMonth">Mês de expiração</label>
                <InputMask
                  type="text"
                  id="ExpiresMonth"
                  name="ExpiresMonth"
                  value={form.values.ExpiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('ExpiresMonth') ? 'error' : ''}
                  mask="99"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="ExpiresYear">Ano de expiração</label>
                <InputMask
                  type="text"
                  id="ExpiresYear"
                  name="ExpiresYear"
                  value={form.values.ExpiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('ExpiresYear') ? 'error' : ''}
                  mask="99"
                />
              </S.InputGroup>
            </S.Row>
          </form>
          <S.BuyButton
            type="submit"
            form="adressForm"
            onClick={() => validCartTabSet(stateCartOrder)}
          >
            Finalizar Pagamento
          </S.BuyButton>
          <S.BuyButton onClick={() => cartTabSet(stateCartAdress)}>
            Voltar para a edição de endereço
          </S.BuyButton>
        </S.CartCard>
        <S.CartOrder className={inOrder ? 'visible' : ''}>
          {isSuccess && data ? (
            <>
              <h3>Pedido realizado - {data.orderId}</h3>
              <p>
                <span>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </span>
                <span>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </span>
                <span>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </span>
                <span>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </span>
              </p>
            </>
          ) : (
            <Loader />
          )}
          <S.BuyButton onClick={() => closeCartTab()}>Concluir</S.BuyButton>
        </S.CartOrder>
      </S.SideBar>
    </S.CartContainer>
  )
}
