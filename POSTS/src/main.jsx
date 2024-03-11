// react
import React from 'react'
import ReactDOM from 'react-dom/client'

// redux
import { Provider } from 'react-redux'
import store from './redux/store.jsx'
import App from './App.jsx'

// CSS
import { ThemeProvider } from 'styled-components'
import theme from './theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
