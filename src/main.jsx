/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route,
} from "react-router-dom";
import Layout from './Layout.jsx';
import App from './App.jsx'
import Login from './Components/Login.jsx';
import Leaflet_map from './pages/Leaflet_map.jsx';
import { Provider } from "react-redux";
import rootStore from "./redux/store/store.js";
const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route >
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/map' element={<Leaflet_map />} />
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={rootStore}>
  <RouterProvider router={router} />
  </Provider>
)
