import App from '@/App'
import AddToCartDetail from '@/pages/AddToCartDetail'
import Category from '@/pages/Category'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shipping from '@/pages/Shipping'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='/products/:slug' element={<ProductDetail/>}/>
        <Route path='/categories' element={<Category/>}/>
        <Route path='/add-to-carts' element={<AddToCartDetail/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
      </Route>
    </Route>
  )
)
export default Router