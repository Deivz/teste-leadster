import { GlobalStyle } from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { defaultTheme } from '@/styles/themes/themes'
import DefaultPage from '@/components/DefaultPage'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DefaultPage>
        <Component {...pageProps} />
      </DefaultPage>
    </ThemeProvider >
  )
}
