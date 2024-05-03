
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,Route,
} from "react-router-dom";
import PasswordGenrator from './pages/PasswordGenrator.jsx';
import Layout from './Layout.jsx';
import Contact from "./pages/Contact.jsx";
import App from './App.jsx'
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';
import DashContextProvider from './Context/DashContextProvider.jsx';
import Todo_page from './pages/Todo_page.jsx';
import Leaflet_map from './pages/Leaflet_map.jsx';
import CurrencyConverter from './pages/CurrencyConverter.jsx';
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
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout/>}>
      <Route path='/home' element={<App/>} />
      <Route path='contact' element={<Contact/>}/>
      <Route path='password' element={<PasswordGenrator/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='todo' element={<Todo_page/>}/>
      <Route path='map' element={<Leaflet_map/>}/>  
      <Route path='currency converter' element={<CurrencyConverter/>}/>             
      {/* <Route path='redux-todo' element={<TodoWithREdux/>}/> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <DashContextProvider>    
    <RouterProvider router={router} />
    </DashContextProvider>
  
)
