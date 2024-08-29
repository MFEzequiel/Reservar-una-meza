import { Route, Routes } from 'react-router-dom'
import { Main } from './components/Main'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Shop } from './components/Shop'
import { Page } from './components/Checkout' 
import { Contact } from './components/Contact'
import { ShowDetail } from './components/ShowDatail'
import { cl } from './components/jquery'
import './css/App.css'
import { useContext, useEffect } from 'react'
import { SetState } from './Context/productContext'

function App() {

  return (
    <>
      <Header />
        <Main>
          <section className="main__section">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/page' element={<Page/>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/product/:id' element={ <ShowDetail /> } />
            </Routes>
          </section>
        </Main>
    </>
  )
}

export default App
