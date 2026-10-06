import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostCreate from './pages/PostCreate'
import PostList from './pages/PostList'
import PostUpdate from './pages/PostUpdate'
import PostDelete from './pages/PostDelete'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='container max-w-6xl mx-auto py-10' style={{ height: 'auto' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post-create' element={<PostCreate />} />
          <Route path='/post-list' element={<PostList />} />
          <Route path='/post-update/:id' element={<PostUpdate></PostUpdate>} />
          <Route path='/post-delete/:id' element={<PostDelete></PostDelete>} />
        </Routes>
      </main>
      
      <Footer />
      <ToastContainer theme='light'/>
    </BrowserRouter>
  )
}

export default App

