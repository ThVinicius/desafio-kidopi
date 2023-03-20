import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import Home from './pages/home/Index'
import Header from './components/header/Header'
import Diff from './pages/difference/Index'

const App: FC = () => {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diff" element={<Diff />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
