import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { IssuesProvider } from './context/contextIssues'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
        <BrowserRouter basename="/githubBlog">
          <Router />
        </BrowserRouter>
      </IssuesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
