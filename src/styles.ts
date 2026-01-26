import { createGlobalStyle } from 'styled-components'

export const color = {
  red: '#E66767',
  white: '#fff',
  cream: '#FFEBD9'
}

export const GlobalCSS = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #FFF8F2;
  }


  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0px auto;


    @media (max-width: 1024px) {
      max-width: 90%;
    }
  }

`
