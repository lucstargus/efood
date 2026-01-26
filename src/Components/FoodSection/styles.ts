import { styled } from 'styled-components'
import { color } from '../../styles'

export const FoodContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  padding-top: 56px;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 60px;
    row-gap: 48px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 60px;
    row-gap: 48px;
    column-gap: 12vw;
  }
`

export const RestaurantImage = styled.div`
  position: relative;
  height: 100%;
`

export const RestaurantImageDark = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.5);
  position: relative;
`

export const RestaurantImageText = styled.div`
  h3 {
    position: absolute;
    top: 25px;
    font-weight: 100;
    font-size: 32px;
    color: ${color.white};
  }

  p {
    position: absolute;
    bottom: 32px;
    font-size: 32px;
    font-weight: 900;
    color: ${color.white};
  }
`

export const Card = styled.div`
  width: 320px;
  height: 358px;
  border: 8px solid ${color.red};
  background-color: ${color.red};

  @media (max-width: 768px) {
    width: 100%;
    height: 375px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`

export const CardImg = styled.img`
  width: 100%;
  height: 180px;

  @media (max-width: 768px) {
    height: auto;
  }
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${color.cream};
  font-size: 16px;
  font-weight: 900;
  padding-bottom: 8px;
  padding-top: 8px;
`
export const CardTextContent = styled.p`
  width: 304px;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${color.cream};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Button = styled.button`
  display: block;
  font-size: 14px;
  margin-top: 8px;
  font-weight: bold;
  height: 24px;
  padding: 4px 6px;
  cursor: pointer;
  color: ${color.red};
  background-color: ${color.cream};
  border: none;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }

  ${Button} {
    width: 218px;
  }
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  background-color: ${color.red};
  padding: 32px;
  color: ${color.white};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 656px;
    margin-left: 24px;

    h4 {
      font-size: 18px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }

    ${Button} {
      display: block;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 90%;
    flex-direction: column;
    align-content: center;

    > div {
      width: 100%;
      margin-left: 0px;
      display: flex;
      align-items: center;
    }

    h4 {
      margin-top: 8px;
    }

    p {
      margin-bottom: 24px;
    }
  }
`
export const TextSeparator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
  }
`

export const IconeFechar = styled.img`
  position: absolute;
  cursor: pointer;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
`

export const ImagemComida = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`
