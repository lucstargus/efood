import { styled } from 'styled-components'
import { color } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${color.red};
`

export const RestaurantInfo = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardImg = styled.div`
  width: 100%;
  height: 217px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
  background-color: ${color.white};
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  border: 1px solid ${color.red};
  border-top: none;
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 16px;
  padding-top: 8px;

  span {
    height: 22px;
    display: flex;

    img {
      width: 21px;
      margin-left: 8px;
    }
  }
`
export const CardTextContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const Button = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
  width: 82px;
  height: 24px;
  padding: 3px 6px;
  color: ${color.cream};
  background-color: ${color.red};
  border: none;
`

export const CardLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
`
