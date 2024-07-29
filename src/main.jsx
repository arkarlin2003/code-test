import ReactDOM from 'react-dom/client'
import './css/index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Route.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
  <RouterProvider router={Router}/>
  </Provider>
  </>,
)
