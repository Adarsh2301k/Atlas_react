import "./App.css";
import { Applayout } from "./components/Layout/Applayout";

import { Home } from "./pages/Home";
import {About} from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";

import {createBrowserRouter, RouterProvider} from "react-router-dom"


const router=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"country",
        element:<Country/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ],
  },
  
])


const App=()=>{
  return <RouterProvider router={router}>

  </RouterProvider>
}
export default App;