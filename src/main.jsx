
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

// import TodoWithREdux from  './pages/TodoWithREdux.jsx';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "contactsAsNested",
//         element: <Contact />,
//       },
//       {
//         path: "/password",
//         element: <PasswordGenrator />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },  
// ]);
//Another way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<Layout />} />
      <Route path='/home' element={<App />} />
      <Route path='login' element={<Login />} />
      <Route path='map' element={<Leaflet_map />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(


  <RouterProvider router={router} />


)
