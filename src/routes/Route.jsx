import App from '@/App'
import Category from '@/pages/Category'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='/products/:slug' element={<ProductDetail/>}/>
        <Route path='/categories' element={<Category/>}/>
      </Route>
    </Route>
  )
)
export default Router