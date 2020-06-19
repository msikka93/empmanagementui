import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
  GetState as GetReduxState
} from 'redux'
import type { EmployeesState } from './employeesTypes'
export type Action = {
  type: string,
  payload: mixed
}
export type State = EmployeesState
export type Store = ReduxStore<State, Action>
export type Dispatch = ReduxDispatch<Action>
export type GetState = GetReduxState<State>

export type History = {
  push: string => void,
  replace: string => void
}

export type Match = {
  params: {
    transactionId: string,
    customerId: string,
    paymentOrderId: string
  }
}

export type Location = {
  pathname: string,
  search: string
}
