import React from 'react'
import { useLocales } from './_utils'
import { ThemeProvider } from 'styled-components'

import theme from './_utils/theme'
import GlobalStyle from './_utils/GlobalStyle'

import Homepage from './pages/Homepage'

function App() {
  const locales = useLocales()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  )
}

export default App
