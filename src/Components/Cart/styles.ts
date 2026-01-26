import { styled } from 'styled-components'
import { color } from '../../styles'
import Lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: row-reverse;
  top: 0;
  left: 0;
  z-index: 1;

  &.visible {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 1;
`

export const SideBar = styled.aside`
  width: 360px;
  height: 100%;
  background-color: ${color.red};
  z-index: 1;
  padding: 32px 8px;
`

export const CardItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${color.cream};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;

  h3 {
    color: ${color.red};
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    color: ${color.red};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  > button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    background-image: url(${Lixeira});
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const Price = styled.p`
  display: flex;
  margin-top: 40px;
  margin-bottom: 16px;
  justify-content: space-between;
  color: #ffebd9;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const BuyButton = styled.button`
  width: 100%;
  display: flex;
  padding: 4px 0px;
  justify-content: center;
  display: block;
  background-color: ${color.cream};
  color: ${color.red};
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 8px;
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${color.cream};

  h4 {
    font-size: 32px;
    margin: 16px 0px;
  }
`

export const CartItems = styled.div`
  display: none;

  div {
    width: 100%;
  }
  &.visible {
    display: flex;
  }
`

export const CartAdress = styled.div`
  display: none;
  &.visible {
    display: block;
  }

  h3 {
    color: ${color.cream};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  form {
    margin-bottom: 24px;
  }
`

export const CartCard = styled(CartAdress)``

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${color.cream};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    background-color: ${color.cream};
    border: none;
    margin-bottom: 8px;

    &.error {
      border: 1px solid red;
    }
  }

  small {
    color: ${color.cream};
    margin-bottom: 8px;
  }
`

export const CartOrder = styled(CartAdress)`
  p {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${color.cream};
    font-size: 14px;

    span {
      width: 100%;
      margin-bottom: 40px;
    }
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CVVCard = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    &:nth-child(1) {
      input {
        width: 228px;
      }
    }
    &:nth-child(2) {
      margin-left: 28px;
      input {
        width: 87px;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      small {
        display: flex;
        width: 100%;
      }
    }
  }
`
