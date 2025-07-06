import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail' 

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen bg-neutral-800'>
        <h3 className='pt-5 mb-6 text-5xl text-center text-orange-500 uppercase'>Blog Sayfası</h3>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App