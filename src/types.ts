// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const GET_COFFEE_REQUEST = 'GET_COFFEE_REQUEST'
export const GET_COFFEE = 'GET_COFFEE'
export const GET_BOX_REQUEST = 'GET_BOX_REQUEST'
export const GET_BOX = 'GET_BOX'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type GetCoffeeActionRequest = {
  type: typeof GET_COFFEE_REQUEST
}

export type GetCoffeeAction = {
  type: typeof GET_COFFEE
  payload: {
    coffee: CoffeeDataType[]
  }
}

export type GetBoxActionRequest = {
  type: typeof GET_BOX_REQUEST
}

export type GetBoxAction = {
  type: typeof GET_BOX
  payload: {
    box: BoxDataType
  }
}

export type BoxActions = GetBoxActionRequest | GetBoxAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction
export type CoffeeActions = GetCoffeeActionRequest | GetCoffeeAction

export type CoffeeState = {
  coffeeInStock: CoffeeDataType[]
}

export type BoxState = {
  boxInStock: BoxDataType
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  coffee: CoffeeState
  box: BoxState
}

export type SummaryCardType = {
  cardIcon: string
  cardTitle: string
  cardBackgroundColor: string
  cardNumber: number | undefined
}

export type CoffeeTabDataType = {
  tabId: number
  tabName: string
  tabTitle: string
  cards: SummaryCardType[]
}

export type CoffeeDataType = {
  orderSize: number
  available: number
  reserved: number
}

export type BoxDataType = {
  available: number
  reserved: number
  pending: number
}
