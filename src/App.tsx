import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'
import { Footer } from './Components/Footer'
import { Rotas } from './rotas'
import { Provider } from 'react-redux'
import { store } from './store'
import { Cart } from './Components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
