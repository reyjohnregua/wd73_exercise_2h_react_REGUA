import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.jsx';
import Product from './components/Products/Products.jsx';
import Cart from './components/Cart/Cart.jsx';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product /> } />
          <Route path="/cart" element={<Cart /> } />
        </Routes>

      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
