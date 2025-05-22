import Album from "./pages/Album";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router";

function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: '/album',
      element: <Album/>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App;