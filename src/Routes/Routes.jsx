import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        // {
        //   path: "/about",
        //   element: <About/>,
        // },
        // {
        //   path: "/contact",
        //   element: <Contact/>,
        // },
        // {
        //   path: "/portfolio",
        //   element: <Portfolio/>,
        // },
        // {
        //   path: "/resume",
        //   element: <Resume/>,
        // },
        // {
        //   path: "/projects",
        //   element: <Projects/>,
        // },
        // {
        //   path: "/blog",
        //   element: <Blog/>,
        // },
        // {
        //   path: "/contact",
        //   element: <Contact/>,
        // },
        // {
        //   path: "/resume",
        //   element: <Resume/>,
        // },
        // {
        //   path: "/projects",
        //   element: <Projects/>,
        // },
        // {
        //   path: "/blog",
        //   element: <Blog/>,
        // },
      ]
    },
  ]);

  export default router