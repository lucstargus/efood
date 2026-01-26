import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RestaurantState = {
  items: CardapioItem[]
  isOpen: boolean
  inCart: boolean
  inAdress: boolean
  inCard: boolean
  inOrder: boolean
}

const initialState: RestaurantState = {
  items: [],
  isOpen: false,
  inCart: true,
  inAdress: false,
  inCard: false,
  inOrder: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const food = state.items.find((food) => food.id === action.payload.id)

      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('O Item já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    stateCartItems: (state, action: PayloadAction<boolean>) => {
      state.inCart = action.payload

      if (state.inCart === true) {
        state.inAdress = false
        state.inCard = false
        state.inOrder = false
      }
    },
    stateCartAdress: (state, action: PayloadAction<boolean>) => {
      state.inAdress = action.payload

      if (state.inAdress === true) {
        state.inCart = false
        state.inCard = false
        state.inOrder = false
      }
    },
    stateCartCard: (state, action: PayloadAction<boolean>) => {
      state.inCard = action.payload

      if (state.inCard === true) {
        state.inAdress = false
        state.inCart = false
        state.inOrder = false
      }
    },
    stateCartOrder: (state, action: PayloadAction<boolean>) => {
      state.inOrder = action.payload

      if (state.inOrder === true) {
        state.inAdress = false
        state.inCart = false
        state.inCard = false
      }
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  stateCartAdress,
  stateCartItems,
  stateCartCard,
  stateCartOrder
} = cartSlice.actions
export default cartSlice.reducer
