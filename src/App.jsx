import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from './components/Main'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Shop } from './components/Shop'
import { Page } from './components/Checkout' 
import { Contact } from './components/Contact'
import './css/App.css'

function App() {
  const [filterText, setFilterText] = useState('')

  return (
    <>
      <Header filterText={filterText} onSetFilterText={setFilterText} />
      <Main>
        <section className="main__section">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop filterText={filterText} />} />
            <Route path='/page' element={<Page/>} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </section>
      </Main>
    </>
  )
}

export default App
