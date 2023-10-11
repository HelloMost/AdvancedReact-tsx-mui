import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import CheckOut from './pages/CheckOut'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchAppBar from './components/Navbar'


function App() {

  return(
    <>
      <SearchAppBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
    </>
  )
   
}

function Wrapped(){
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default Wrapped
