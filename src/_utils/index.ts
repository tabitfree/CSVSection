import { Locales } from '../_types/types'
import { RefObject } from 'react'
import locales from '../_config/locales.json'

export const useLocales = (): Locales => locales

export const scrollTo = (ref: RefObject<any>) => {
  ref.current.scrollIntoView({ behavior: 'smooth' })
}
