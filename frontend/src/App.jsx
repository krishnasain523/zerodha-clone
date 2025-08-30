
import './App.css'
import Homepage from './landingpage/home/homepage'
import Signuppage from './landingpage/singnup/signuppage'
import Aboutpage from './landingpage/about/aboutpage'
import Productpage from './landingpage/products/productpage'
import Pricepage from './landingpage/pricing/pricepage'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Notfound from './notfound'
import {  Route } from 'react-router-dom'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Homepage />,
//       },
//       {
//         path: "about",
//         element: <Aboutpage />,
//       },
//       {
//         path: "products",
//         element: <Productpage />,
//       }
//       ,
//       {
//         path: "pricing",
//         element: <Pricepage />,
//       }
//       ,
//       {
//         path: "signup",
//         element: <Signuppage />,
//       }
//       ,
//       {
//         path: "*",
//         element: <Notfound/>,
//       }
//     ]
//   },

// ])
// second method
const router= createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
          <Route path='' element={<Homepage/>}/>
          <Route path='about' element={<Aboutpage/>}/>
          <Route path='signup' element={<Signuppage/>}/>
          <Route path='pricing' element={<Pricepage/>}/>
          <Route path='products' element={<Productpage/>}/>
          <Route path='*' element={<Notfound/>}/>
     </Route>
  )
)
function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
