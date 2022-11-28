import { createContext } from 'react'
import { IPageContext } from '../types/pageContext'

export const PageContext = createContext<IPageContext>({
  userInfo: null,
  isAuthorised: false,
})
