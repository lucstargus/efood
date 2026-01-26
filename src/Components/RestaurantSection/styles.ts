import { styled } from 'styled-components'

export const RestaurantContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  padding-top: 80px;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
