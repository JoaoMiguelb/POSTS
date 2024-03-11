
// CSS
import { createGlobalStyle } from 'styled-components'

// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    font-family: Raleway, Arial, Helvetica, sans-serif;
    background-color: #F2F2F2;
  }
`

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/favorites' element={<Favorites/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
